app.controller('DoctorCtrl', ['$scope', '$rootScope', 'DoctorService','$state', function ($scope, $rootScope, DoctorService, $state) {
    
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        title: '找名医'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);