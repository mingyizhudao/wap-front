app.controller('HomeCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    window.headerConfig = {
        enableHeader: false
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    $scope.routerGo = function(url){
    	$state.go(url);
    }
}]);