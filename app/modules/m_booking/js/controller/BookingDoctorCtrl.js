app.controller('BookingDoctorCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'BookingService', 'StorageConfig', '$state', function ($rootScope, $scope, dialog, $stateParams, BookingService, StorageConfig, $state) {

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

    $scope.treatmentDoctorName = $stateParams.doctorName;
    $scope.treatmentHospitalName = $stateParams.hospitalName;
    $scope.treatmentDeptName = $stateParams.departmentName;

    $scope.isCheck = false;
    if(StorageConfig.BOOKING_STORAGE.getItem('booking_doctor')){
        StorageConfig.BOOKING_STORAGE.putItem('booking_doctor',null)
        $scope.$broadcast('setHeaderBack', null);
    }

    $scope.bookingDoctor = function(_patient){
        var _paramsObj = {
            booking : {
                doctor_id: $stateParams.doctorId,
                contact_name: _patient.name,
                disease_detail: _patient.diseaseDescription,
                disease_name: _patient.diseaseName
            }
        };
        postBookingInfo(_paramsObj);
    }
    function postBookingInfo(_params){
        BookingService.postBookingDoctor(_params).then(
            function(res){
                console.log('suc',res);
            },
            function(res){
                console.log('err',res);
            }
        );
    }

}]);