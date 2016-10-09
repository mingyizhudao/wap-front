app.controller('BookingDoctorCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'DoctorService', function ($rootScope, $scope, dialog, $stateParams, DoctorService) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '预约医生'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    // $scope.treatmentHospital = $stateParams.hospitalName;
    // $scope.treatmentDepartment = $stateParams.departmentName;

}]);