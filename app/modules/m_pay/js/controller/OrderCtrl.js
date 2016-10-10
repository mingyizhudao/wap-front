app.controller('OrderCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'dialog', 'OrderService', 'CMSDataConfig', function ($scope, $rootScope, $state, $stateParams, dialog, OrderService, CMSDataConfig) {
    window.headerConfig = {
        enableHeader: true,
        enableBack: true,
        enableRefresh: false,
        title: '订单'
    };
    window.footerConfig = {
        enableFooter: false
    };
    $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
    $rootScope.$broadcast('setFooterConfig', window.footerConfig);

    var _paramsObj = {
        bookingId: $stateParams.bookingId
    }
    getOrderDetail(_paramsObj);
    function getOrderDetail(_params){
        OrderService.getOrderDetail(_params).then(
            function(res){
                $scope.orderNum = res.results.refNo;
                $scope.orderTitle = res.results.patientName;
                $scope.orderDetail = res.results.diseaseDetail;
                var orderStatus = CMSDataConfig.orderStatus;
                for(var i = 0; i<orderStatus.length; i++){
                    if(orderStatus[i].type == res.results.bkStatus){
                        $scope.orderStatus = orderStatus[i].text;
                    }
                }
            },
            function(res){

            }
        );
    }

    $scope.cancelPay = function(){
        $state.go('layout.me');
    }

}]);