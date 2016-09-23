app.controller('MeCtrl',['$scope','$rootScope','StorageConfig','$state','UserService',function($scope,$rootScope,StorageConfig,$state,UserService){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        title: '全部'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

  

}]);