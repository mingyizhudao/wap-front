app.controller('HospitalCtrl', ['$scope','$rootScope',function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        enableBack: false,
        enableRefresh: false,
        title: '推荐',
        areaOperate: {
            enable: true,
            areas: [
                {
                    name: '全部地区',
                    cityId: 0
                },
                {
                    name: '上海',
                    cityId: 1
                },
                {
                    name: '杭州',
                    cityId: 2
                }

            ],
            trackKey: 'name',
            currentArea: {
                name: '上海',
                cityId: 1
            }
        }
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);
}]);