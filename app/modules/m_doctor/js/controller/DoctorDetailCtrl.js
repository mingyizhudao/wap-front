app.controller('DoctorDetailCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'DoctorService', '$state', 'StorageConfig', function ($rootScope, $scope, dialog, $stateParams, DoctorService, $state, StorageConfig) {
    if (!$stateParams.doctorId) {
        $state.go('layout.home');
    }
    if (StorageConfig.BOOKING_STORAGE.getItem('booking_doctor')){
        $state.go('layout.booking-doctor',StorageConfig.BOOKING_STORAGE.getItem('booking_doctor'));
    }

    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: false,
        enableShare: true,
        otherThemeClass: 'header-doc-img',
        title: '医生名'
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);

    // document.getElementsByClassName('header')[0].className += ' doc-header';

    $scope.selectedTab = 0;
    $scope.checkTab = function (index) {
        $scope.selectedTab = index;
    };

    var spinner = dialog.showSpinner();
    var urlOptions = {
        id: $stateParams.doctorId
    };
    DoctorService.getDoctorDetail(urlOptions).then(function (res) {
        dialog.closeSpinner(spinner.id);
        // console.log(res.results.doctor);
        window.headerConfig.title = res.results.doctor.name;
        $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
        $scope.bookingDtName = '预约' + res.results.doctor.name;
        $scope.doctorInfo = res.results.doctor;
        $scope.comments = res.results.comment;
        $scope.commentNum = res.results.comment.length;
    }, function (res) {
        dialog.closeSpinner(spinner.id);
        dialog.alert(res.errorMsg);
    });

    $scope.bookingDoctor = function () {
        
        $state.go('layout.booking-doctor',{
            // departmentId: department.id
            // hospitalId: hospital.id,
            // departmentId: department.id,
            doctorId: $scope.doctorInfo.id,
            doctorName: $scope.doctorInfo.name,
            departmentName: $scope.doctorInfo.hpDeptName,
            hospitalName: $scope.doctorInfo.hospitalName
        });
    };
}]);