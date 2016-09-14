app.controller('SearchCtrl', ['$scope', '$rootScope', '$state',function ($scope, $rootScope, $state) {
    window.headerConfig = {
        enableHeader: false
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    $scope.routerGo = function(url){
        $state.go(url);
    }
    $scope.docname = '冯华华';
    $scope.hospitalname = '上海交通大学医学院附属新华医药';
    $scope.searchContent = '华';
}]);