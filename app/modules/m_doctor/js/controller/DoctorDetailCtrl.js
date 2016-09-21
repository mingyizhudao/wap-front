app.controller('DoctorDetailCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'DoctorService', '$state', function ($rootScope, $scope, dialog, $stateParams, DoctorService, $state) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '医生名?'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    // document.getElementsByClassName('header')[0].className += ' doc-header';

    $scope.selectedTab = 0;
    $scope.checkTab = function (index) {
        $scope.selectedTab = index;
    };

    // var spinner = dialog.showSpinner();
    // var params = {};
    // var urlOptions = {
    //     id: $stateParams.doctorId
    // };
    // DoctorService.getDoctorDetail(params, urlOptions).then(function (res) {
    //     dialog.closeSpinner(spinner.id);
    //     $scope.doctorInfo = res.results;
    // }, function (res) {
    //     dialog.closeSpinner(spinner.id);
    //     dialog.alert(res.errorMsg);
    // });

    $scope.bookingDoctor = function () {
        $state.go('layout.booking-doctor',{
            // departmentId: department.id
            // hospitalId: hospital.id,
            // departmentId: department.id,
            // departmentName: department.name,
            // hospitalName: hospital.name
        });
    };
}]);