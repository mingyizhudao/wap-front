app.controller('BeforeAdvisoryCtrl', ['$rootScope', '$scope', 'dialog', '$state', 'DoctorStorage', 'StorageConfig',function ($rootScope, $scope, dialog, $state, DoctorStorage, StorageConfig) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: true,
        title: '在线咨询'
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setHeaderBack', {
        route: 'layout.home'
    });
    $scope.userGender = 'male';

    var aObjg = StorageConfig.FAKE_STORAGE.getItem('advisory');
    if (aObjg) {
        $scope.userName = aObjg.cname;
        $scope.userAge = aObjg.cage;
        $scope.userGender = aObjg.csex;
    }
    $scope.goSelectDisease = function () {
        StorageConfig.FAKE_STORAGE.putItem('advisory',{
            cname: $scope.userName,
            cage: $scope.userAge,
            csex: $scope.userGender
        });
        $state.go('layout.disease', {
            operateType: 1
        });
    };
    $scope.goStartTalk = function () {
        StorageConfig.FAKE_STORAGE.putItem('advisory',{
            cname: $scope.userName,
            cage: $scope.userAge,
            csex: $scope.userGender,
            cdise: $scope.selectedDiseaseName
        });
        $state.go('layout.advisory-talk');
    };
    if (DoctorStorage.DISEASE_STORAGE.getItem('currentDepartment')&&DoctorStorage.DISEASE_STORAGE.getItem('currentDisease')) {
        $scope.selectedDiseaseName = DoctorStorage.DISEASE_STORAGE.getItem('currentDepartment').department + ' - ' + DoctorStorage.DISEASE_STORAGE.getItem('currentDisease').disease;
    }
}]);