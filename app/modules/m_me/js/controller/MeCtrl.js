app.controller('MeCtrl',['$scope','$rootScope','StorageConfig','$state','UserService',function($scope,$rootScope,StorageConfig,$state,UserService){
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

    $scope.goOrder = function(_type){
        $state.go('layout.order',{
            orderType: _type
        });
    }  
}]);