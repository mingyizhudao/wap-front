app.controller('OrderCtrl',['$scope','$rootScope','$state','$stateParams','UserService',function($scope,$rootScope,$state,$stateParams,UserService){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        title: '全部'
    };
    var orderType = $stateParams.orderType;
    if(orderType){
        switch(orderType)
        {
            case '1':
                window.headerConfig.title = '待支付';
                break;
            case '2':
                window.headerConfig.title = '安排中';
                break;
            case '5':
                window.headerConfig.title = '待确认';
                break;
            case '6':
                window.headerConfig.title = '待评价';
                break;
        }

    }
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    getOrderList(orderType)
    function getOrderList(orderType){
        var opt = {
            bk_status:orderType
        }
        UserService.getOrderList(opt).then(
            function(res){
                console.log('suc',res);
            },
            function(res){
                console.log('err',res);
            }
        )    
    }

}]);