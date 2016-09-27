app.controller('ProblemsCtrl',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '常见问题'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    $scope.routerGo = function(url){
        $state.go(url);
    }
}]);

app.controller('ProblemLoginCtrl',['$scope','$rootScope', function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '关于注册/登录'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);

app.controller('ProblemBookingCtrl',['$scope','$rootScope', function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '关于预约'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);

app.controller('ProblemCostCtrl',['$scope','$rootScope', function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '关于费用'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);

app.controller('ProblemPlatformCtrl',['$scope','$rootScope', function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '关于平台'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);

app.controller('ProblemAgreementCtrl',['$scope','$rootScope', function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '名医主刀服务协议'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);