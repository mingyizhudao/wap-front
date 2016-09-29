app.controller('OperationTrainCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'DoctorService', '$state',function ($rootScope, $scope, dialog, $stateParams, DoctorService, $state) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: false,
        title: '手术直通车'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    // $scope.treatmentHospital = $stateParams.hospitalName;
    // $scope.treatmentDepartment = $stateParams.departmentName;
    $scope.routerGo = function(url){
        $state.go(url);
    }

    console.log(document.getElementsByClassName('quick-booking-page'));
    console.log(document.getElementById('layoutContent').clientHeight);
    document.getElementsByClassName('operation-train-page')[0].style.height = document.getElementById('layoutContent').clientHeight + 'px';
}]);

app.controller('QuickBookingCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'DoctorService', '$state',function ($rootScope, $scope, dialog, $stateParams, DoctorService, $state) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '快速预约'
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