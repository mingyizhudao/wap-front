app.controller('OrderCtrl', ['$scope', '$rootScope', '$state', 'dialog', function ($scope, $rootScope, $state, dialog) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: false,
        enableRefresh: false,
        title: '订单'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);


}]);