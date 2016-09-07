app.controller('RegisterCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: false,
        title: '注册',
        otherRightOperate: {
            enable: true,
            html: '立即登录',
            clickCall: function () {
                $state.go('layout.login');
            }
        }
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);