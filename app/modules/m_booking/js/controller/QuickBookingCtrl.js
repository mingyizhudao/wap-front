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

    // console.log(document.getElementById('layoutHeader'));
    document.getElementsByClassName('operation-train-page')[0].style.height = document.getElementById('layoutContent').clientHeight + 'px';
}]);

app.controller('QuickBookingCtrl', ['$rootScope', '$scope', 'dialog', '$stateParams', 'DoctorService', '$state', 'CommonService', 'StorageConfig', function ($rootScope, $scope, dialog, $stateParams, DoctorService, $state, CommonService, StorageConfig) {
    $scope.isLogin = false;
    if (!StorageConfig.TOKEN_STORAGE.getItem('authorization')){
        $scope.isLogin = true;
    }

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

    var _captchaId = ''; 
    var apiUrl = window.envs.api_url;
    getCaptcha();
    $scope.refreshCaptcha = function () {
        getCaptcha();
    };
    function getCaptcha(){
        CommonService.getCaptcha().then(
            function(res){
                $scope.captchaUrl = apiUrl + res.result.image;
                _captchaId = res.result.id;
            },
            function(res){
                console.log('err',res);
            }
        );
    }

    $scope.sendSMSText = '发送验证码';
    $scope.sendSMSCode = function () {
        $scope.lockEnabled = true;
        var validParams = {
            captcha_code: parseInt($scope.codeLogin_captcha),
            id: _captchaId
        };
        var smsParams = {
            smsVerifyCode: {
                mobile: $scope.codeLogin_phone,
                action_type: 102 // the action_type, login:102, fast booking:200
            }
        };
        /**
         * call the validate captcha interface. Return false in error.
         */
        CommonService.validCaptcha(validParams).then(function (res) {
            //if validate passed, send the mobile message.
            CommonService.sendSMSCode(smsParams).then(function (res) {
                dialog.toast('验证码已发送');
                var count = 60;
                var verifyCodeInterval = setInterval(function () {
                    $scope.sendSMSText = count-- + '秒后重发';
                    $scope.$apply();
                    if (count == 0) {
                        clearInterval(verifyCodeInterval);
                        $scope.sendSMSText = '重新发送';
                        $scope.lockEnabled = false;
                        $scope.$apply();
                    }
                }, 1000);
            }, function (res) {
                dialog.alert(res.errorMsg);
                $scope.lockEnabled = false;
            });
        }, function (res) {
            dialog.toast(res.errorMsg);
            $scope.lockEnabled = false;
        });
    };

}]);