app.controller('MeCtrl',['$scope','$rootScope','StorageConfig','$state',function($scope,$rootScope,StorageConfig,$state){
    window.headerConfig={
        enableHeader: false
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);