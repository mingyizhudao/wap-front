app.controller('MeCtrl',['$scope','$rootScope','StorageConfig','$state',function($scope,$rootScope,StorageConfig,$state){
    window.headerConfig={
        enableHeader: false
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    /**
     * logout.
     * when enter the back on the login page. It should be back to the home page.
     */
    $scope.logout = function(){
        StorageConfig.TOKEN_STORAGE.putItem('authorization','');
        $state.go('layout.login',{
            redirectRoute: 'layout.me',
            backRoute: 'layout.home'
        });
    };
}]);