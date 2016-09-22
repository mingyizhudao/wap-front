app.controller('HospitalDetailCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'HospitalService', '$state', function ($rootScope, $scope, dialog, $stateParams, HospitalService, $state) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '医院详情'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    /**
     * control the tab checked
     * @type {number}
     */
    $scope.selectedTab = 0;
    $scope.checkTab = function (index) {
        $scope.selectedTab = index;
    };

    var spinner = dialog.showSpinner();
    var params = {};
    var urlOptions = {
        id: $stateParams.hospitalId
    };
    HospitalService.getHospitalDetail(params, urlOptions).then(function (res) {
        dialog.closeSpinner(spinner.id);
        $scope.hospitalInfo = res.results;
    }, function (res) {
        dialog.closeSpinner(spinner.id);
        dialog.alert(res.errorMsg);
    });

    $scope.goDepartment = function (hospital, department) {
        // console.log('department',department);
        $state.go('layout.department',{
            departmentId: department.id
            // hospitalId: hospital.id,
            // departmentId: department.id,
            // departmentName: department.name,
            // hospitalName: hospital.name
        });
    };
}]);