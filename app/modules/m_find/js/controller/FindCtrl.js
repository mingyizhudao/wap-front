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

    var frameHeight = document.getElementById('layoutContent').clientHeight;
    var iframe = document.getElementById('iframe');
    iframe.style.height = frameHeight+'px';
    function selectedTab(item, index){
        console.log('item',item);
        console.log('index',index);
        var frameSrc = 'http://wap.dev.mingyizd.com/mobile/event/index/page/'+index+'/header/0.html';
        iframe.src = frameSrc;
    }

}]);