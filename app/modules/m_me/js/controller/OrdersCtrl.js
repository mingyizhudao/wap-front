app.controller('OrdersCtrl',['$scope','$rootScope','$state','$stateParams','UserService','CMSDataConfig',function($scope,$rootScope,$state,$stateParams,UserService,CMSDataConfig){
    window.headerConfig={
        enableHeader: true,
        enableBack: true,
        title: '全部'
    };
    var orderStatus = CMSDataConfig.orderStatus;
    var orderType = $stateParams.orderType;
    for(var i = 0; i<orderStatus.length; i++){
        if(orderStatus[i].type == orderType){
            window.headerConfig.title = orderStatus[i].text;
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
                // $scope.orderList
                console.log('suc',res);
                $scope.orderList = res.results;
            },
            function(res){
                console.log('err',res);
            }
        )    
    }

}]);