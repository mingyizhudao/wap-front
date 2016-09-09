app.controller('HospitalCtrl', ['$scope', '$rootScope', 'CommonService', 'dialog', 'StorageConfig', 'HospitalService', function ($scope, $rootScope, CommonService, dialog, StorageConfig, HospitalService) {
    var defaultAllCity = {city: '全部地区', id: 0, is_hot: 0};
    window.headerConfig = {
        enableHeader: true,
        enableBack: false,
        enableRefresh: false,
        title: '推荐',
        areaOperate: {
            enable: true,
            areas: StorageConfig.CITY_STORAGE.getItem('hospitalCities') ? StorageConfig.CITY_STORAGE.getItem('hospitalCities') : defaultAllCity,
            trackKey: 'city',
            currentArea: StorageConfig.CITY_STORAGE.getItem('hospitalCityCurrent') ? StorageConfig.CITY_STORAGE.getItem('hospitalCityCurrent') : {
                city: '全部地区',
                id: 0,
                is_hot: 0
            },
            selectedCall: function (item) {
                selectedCall(item);
            }
        }
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    //If not find the cities info in the sessionStorage. It should request the service to get them.
    if (!(StorageConfig.CITY_STORAGE.getItem('hospitalCities') && StorageConfig.CITY_STORAGE.getItem('hospitalCities').length)) {
        requestGetCities();
    }

    /**
     * the function about how to request get cities.
     */
    function requestGetCities() {
        var spinner = dialog.showSpinner();
        var params = {
            has_team: 0,
            type: 'hospital'
        };
        CommonService.getCity(params).then(function (res) {
            dialog.closeSpinner(spinner.id);
            var allCities = [defaultAllCity].concat(res.results);
            StorageConfig.CITY_STORAGE.putItem('hospitalCities', allCities);
            var areaOperateObj = {
                enable: true,
                areas: allCities,
                trackKey: 'city',
                currentArea: StorageConfig.CITY_STORAGE.getItem('hospitalCityCurrent') ? StorageConfig.CITY_STORAGE.getItem('hospitalCityCurrent') : defaultAllCity,
                selectedCall: function (item) {
                    selectedCall(item);
                }
            };
            window.headerConfig.areaOperate = areaOperateObj;
            $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
        }, function (res) {
            dialog.closeSpinner(spinner.id);
            dialog.alert(res.errorMsg);
        });
    }

    /**
     * The callback after selected the current city.
     * @param item          //the city object, like this
     * item:{
     *      city: '上海'，
     *      id: 101,
     *      is_hot: 1
     * }
     */
    function selectedCall(item) {
        var spinner = dialog.showSpinner();
        StorageConfig.CITY_STORAGE.putItem('hospitalCityCurrent', item);
        var params = {
            city: item.id,
            cate: 111,
            page: 0,
            pagesize: 10,
            disease_name: ''
        };
        HospitalService.getHospitalByQuery(params).then(function(res){
            dialog.closeSpinner(spinner.id);
            if(res.results && res.results.length){
                $scope.hospitalList = res.results;
            }else{
                dialog.toast('该地区暂时没有医院哦~');
            }
        },function(res){
            dialog.closeSpinner(spinner.id);
            dialog.alert(res.errorMsg);
        });
    }
}]);