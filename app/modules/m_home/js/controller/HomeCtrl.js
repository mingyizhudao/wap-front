app.controller('HomeCtrl', ['$scope', '$rootScope', '$state', 'SearchStorage',function ($scope, $rootScope, $state, SearchStorage) {
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

    $scope.routerGo = function(url){
    	$state.go(url);
    }
}]);