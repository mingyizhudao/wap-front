app.controller('HospitalCtrl', ['$scope','$rootScope',function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        title: '推荐'
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);