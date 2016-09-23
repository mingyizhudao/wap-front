app.controller('DoctorCtrl', ['$scope', '$rootScope', 'DoctorService','$state', 'dialog', '$stateParams', 'StorageConfig', 'CommonService', function ($scope, $rootScope, DoctorService, $state, dialog, $stateParams, StorageConfig, CommonService) {
    
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

    $scope.goDoc = function(_id){
        $state.go('layout.doctor-detail', {
            doctorId: _id
        });
    }


    $scope.isShowContent = false;
    $scope.showContent = function(_index){
        $scope.isShowContent = true;
        if (_index==$scope.selectedIndex) {
            $scope.hideContent();
        }else{
            if(_index==2&&$scope.deptName==undefined){//疾病
                $scope.selectedIndex = 1;
                return false;
            }
            $scope.selectedIndex = _index;
        }
    }
    $scope.hideContent = function(){
        $scope.selectedIndex = false;
        $scope.isShowContent = false;
    }

    $scope.clickDeptList = function(_deptObj,$event){
        $event.stopPropagation();
        $scope.hideContent();
        $scope.deptName = _deptObj.name;
        defaultParams.disease_sub_category = _deptObj.id;
        selectedCall(defaultParams);//刷新医生列表
        getDiseaseList(_deptObj.id);//获取疾病列表
    }
    $scope.clickDiseaseList = function(_diseaseObj,$event){
        $event.stopPropagation();
        $scope.hideContent();
        $scope.diseaseName = _diseaseObj.name;
        defaultParams.disease = _diseaseObj.id;
        selectedCall(defaultParams);//刷新医生列表
    }
    $scope.clickCityList = function(_cityObj,$event){
        $event.stopPropagation();
        $scope.hideContent();
        $scope.cityName = _cityObj.city;
        defaultParams.city = _cityObj.id;
        selectedCall(defaultParams);//刷新医生列表
    }

    var defaultParams = {
        city: 0,
        disease: 123,
        disease_sub_category: ''
    }
    selectedCall(defaultParams);
    function selectedCall(params) {
        var spinner = dialog.showSpinner();
        // StorageConfig.CITY_STORAGE.putItem('hospitalCityCurrent', item);
        var _params = params;
        if($stateParams.diseasesId!=''){
            _params.disease = $stateParams.diseasesId;
        }
        console.log('_params',_params);
        DoctorService.getDoctorByQuery(_params).then(function(res){
            dialog.closeSpinner(spinner.id);
            if(res.results && res.results.length){
                // "isContracted": "1", 签约专家    isServiceId  2-义诊
                $scope.doctorList = res.results;
            }else{
                dialog.toast('该地区暂时没有医生哦~');
            }
        },function(res){
            dialog.closeSpinner(spinner.id);
            dialog.alert(res.errorMsg);
        });
    }

    getDeptList();
    // var deptId,diseaseId;
    function getDeptList(){
        DoctorService.getDetpList().then(
            function(res){
                var _deptList = res.results;
                openDeptList(_deptList);
            },
            function(res){
                console.log('res',res);
            }
        );
    }
    function getDiseaseList(_id){
        var optionUrl = {
            deptId: _id
        }
        DoctorService.getDiseaseList(optionUrl).then(
            function(res){
                var _disList = res.results.disease;
                openDiseaseList(_disList);
            },
            function(res){
                console.log('res',res);
            }
        );
    }
    function openDeptList(_list){
        if (_list&&_list.length) {
            $scope.deptList = _list;
        }
    }
    function openDiseaseList(_list){
        if (_list&&_list.length) {
            $scope.diseaseList = _list;
        }
    }
    function openCityList(_list){
        if (_list&&_list.length) {
            $scope.cityList = _list;
        }
    }

    //  获取地区
    var defaultAllCity = {city: '全部地区', id: 0, is_hot: 0};
    if (!(StorageConfig.CITY_STORAGE.getItem('doctorCities') && StorageConfig.CITY_STORAGE.getItem('doctorCities').length)) {
        requestGetCities();
    }else{
        openCityList((StorageConfig.CITY_STORAGE.getItem('doctorCities')));
    }
    function requestGetCities() {
        var params = {
            has_team: 0,
            type: 'doctor'
        };
        CommonService.getCity(params).then(function (res) {
            var allCities = [defaultAllCity].concat(res.results);
            openCityList(allCities);
            StorageConfig.CITY_STORAGE.putItem('doctorCities', allCities);
        }, function (res) {
            dialog.closeSpinner(spinner.id);
            dialog.alert(res.errorMsg);
        });
    }

}]);