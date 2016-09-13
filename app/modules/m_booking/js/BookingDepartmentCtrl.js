app.controller('BookingDepartmentCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'HospitalService', function ($rootScope, $scope, dialog, $stateParams, HospitalService) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '预约科室'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    $scope.treatmentHospital = $stateParams.hospitalName;
    $scope.treatmentDepartment = $stateParams.departmentName;

}]);