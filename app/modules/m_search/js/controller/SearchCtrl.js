app.controller('SearchCtrl', ['$scope', '$rootScope', '$state', 'SearchService', 'dialog', 'SearchStorage', function ($scope, $rootScope, $state, SearchService, dialog, SearchStorage) {
    window.headerConfig = {
        enableHeader: false
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    //第一次进入页面search input获取焦点
    document.getElementById('searchInput').focus();
    if (SearchStorage.SEARCH_STORAGE.getItem('searchResult')) {
        var _res = SearchStorage.SEARCH_STORAGE.getItem('searchResult');
        $scope.searchContent = _res.text;
        getSimpleList(_res.results);
    }
    if (SearchStorage.SEARCH_STORAGE.getItem('searchMoreResult')) {
        var _res = SearchStorage.SEARCH_STORAGE.getItem('searchMoreResult');
        $scope.searchContent = _res.text;
        getCompleteList(_res.results);
    }

    $scope.routerGo = function(url){
        $state.go(url);
    }
    $scope.getMoreResult = function(obj){
        SearchStorage.SEARCH_STORAGE.putItem('searchMoreResult', {
            results: obj,
            text: $scope.searchContent
        });
        $state.go('layout.searchMore');
    }

    $scope.searchInfo = function(searchText){
        $scope.resDoc = false;
        $scope.resHp = false;
        $scope.resDes = false;
        if(searchText){
            var params = {
                name: searchText
            };
            SearchService.searchInfo(params).then(
                function (res) {
                    SearchStorage.SEARCH_STORAGE.putItem('searchResult', {
                        results: res.results,
                        text: searchText
                    });
                    getSimpleList(res.results);
                }, 
                function (res) {
                    console.log('err',res);
                    var _alert = dialog.alert(res.errorMsg,{title:'出错啦！'});
                });
        }
    }

    function getSimpleList(_res){
        var res = _res;
        if (res.doctors) {
            $scope.resDoc = {
                simple: res.doctors.slice(0,3),
                complete: res.doctors,
                num: res.doctors.length,
                name: '医生'
            };
        }
        if(res.hospitals){
            $scope.resHp = {
                simple: res.hospitals.slice(0,3),
                complete: res.hospitals,
                num: res.hospitals.length,
                name: '医院'
            };
        }
        if(res.diseases){
            $scope.resDes = {
                simple: res.diseases.slice(0,3),
                complete: res.diseases,
                num: res.diseases.length,
                name: '疾病'
            };
        }
    }

    function getCompleteList(_res){
        var res = _res;
        if (res.name== '医生') {
            $scope.moreDoc = res.complete;
        }
        if(res.name== '医院'){
            $scope.moreHp = res.complete;
        }
        if(res.name== '疾病'){
            $scope.moreDes = res.complete;
        }
    }

}]);