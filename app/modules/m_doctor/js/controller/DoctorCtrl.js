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

    $scope.routerGo = function(url){
        $state.go(url);
    }

    $scope.isShowContent = false;
    $scope.showContent = function(_index){
        $scope.isShowContent = true;
        if (_index==$scope.selectedIndex) {
            $scope.hideContent();
        }else{
            $scope.selectedIndex = _index;
        }
    }
    $scope.hideContent = function(){
        $scope.selectedIndex = false;
        $scope.isShowContent = false;
    }
    $scope.clickList = function($event){
        $event.stopPropagation();
    }

}]);