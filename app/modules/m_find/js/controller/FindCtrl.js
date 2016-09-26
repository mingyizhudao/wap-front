app.controller('FindCtrl', ['$scope','$rootScope',function($scope,$rootScope){
    window.headerConfig={
        enableHeader: true,
        enableBack: false,
        title: '发现',
        enableTitle: false,
        enableRefresh: false,
        tabOperate: {
            enableTab: true,
            options: [
                {
                    name: '手术专题',
                    id: '0'
                },
                {
                    name: '名医故事',
                    id: '1'
                }
            ],
            currentTab: 0,
            selectedCall: selectedTab
        }
    };
    window.footerConfig = {
        enableFooter: true
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    function selectedTab(item, index){
        console.log('item',item);
        console.log('index',index);
    }
}]);