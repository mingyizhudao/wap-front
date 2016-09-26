app.controller('HomeCtrl', ['$scope', '$rootScope', '$state', 'SearchStorage', 'DoctorStotage', function ($scope, $rootScope, $state, SearchStorage, DoctorStotage) {
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
}]);