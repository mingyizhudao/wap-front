app.controller('FindCtrl', ['$scope','$rootScope',function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        title: '发现'
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);