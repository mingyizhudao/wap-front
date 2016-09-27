app.controller('HomeCtrl', ['$scope', '$rootScope', '$state', 'SearchStorage', 'DoctorStotage', 'dialog', function ($scope, $rootScope, $state, SearchStorage, DoctorStotage, dialog) {
    window.headerConfig = {
        enableHeader: false
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    //清楚搜索记录
    SearchStorage.SEARCH_STORAGE.removeItem('searchResult');
    SearchStorage.SEARCH_STORAGE.removeItem('searchMoreResult');
    DoctorStotage.DOCTOR_TAB_STORAGE.removeItem('tabObj');

    $scope.routerGo = function(url){
    	$state.go(url);
    }
    $scope.callPhone = function(){
        var _confirm = dialog.confirm('立即拨打免费客服热线400-6277-120',{
            title: '友情提示',
            closeCallback: function(value){
                if(value == 0){
                }
                if(value == 1){
                   location.href = 'tel://4006277120';
                }
            }
        });   
    }
    $scope.goBaidukf = function(){
        location.href = 'http://p.qiao.baidu.com/im/index?siteid=9290674&ucid=10135139';
    }

    $scope.goDetailUrl = function(_url){
        console.log('_url',_url);
        $state.go('layout.find-detail',{
            storyName: _url
        })
    }

    $scope.goHospital = function(_deptId){
        console.log('_deptId',_deptId);
        $state.go('layout.search-hospital',{
            deptId: _deptId
        })
    }

}]);