app.controller('MeCtrl',['$scope','$rootScope','StorageConfig','$state','UserService', 'dialog', function($scope,$rootScope,StorageConfig,$state,UserService,dialog){
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

    $scope.contactUs = function(){
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

    $scope.routerGo = function(url){
        $state.go(url);
    }
    
}]);