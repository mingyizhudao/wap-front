app.controller('MarkCtrl',['$scope','$rootScope','StorageConfig','$state', '$stateParams', 'dialog', function($scope,$rootScope,StorageConfig,$state,$stateParams,dialog){
    //修改评论状态

    var orderStatus = $stateParams.status;
    if (orderStatus == 0) {
        $scope.isMarked = false;
        window.headerConfig={
            enableHeader: true,
            enableRefresh: false,
            enableBack: true,
            otherRightOperate: {
                enable: true,
                html: '查看详情',
                clickCall: goOrderDetail
            },
            title: '待评价'
        };
        $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    }
    else if(orderStatus == 1){
        $scope.isMarked = true;
        window.headerConfig={
            enableHeader: true,
            enableRefresh: false,
            enableBack: true,
            otherRightOperate: {
                enable: true,
                html: '查看详情',
                clickCall: goOrderDetail
            },
            title: '已评价'
        };
        $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    }

    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

   
    function goOrderDetail(){
        $state.go('layout.orderDetail',{
            bookingId: 2145, //写死
            status: 8 //订单已完成
        })
    }  

    $scope.commit = function(){

        $scope.isMarked = true;
        window.headerConfig={
            enableHeader: true,
            enableRefresh: false,
            enableBack: true,
            otherRightOperate: {
                enable: true,
                html: '查看详情',
                clickCall: goOrderDetail
            },
            title: '已评价'
        };
        $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    }

    
}]);