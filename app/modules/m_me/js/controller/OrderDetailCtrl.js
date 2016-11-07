app.controller('OrderDetailCtrl',['$scope','$rootScope','$state','$stateParams','CMSDataConfig', 'OrderService', 'dialog', function($scope,$rootScope,$state,$stateParams,CMSDataConfig, OrderService, dialog){
    var _paramsObj = {
        bookingId: $stateParams.bookingId
    }
    var cancelOrder = function(){
        // console.log('cancel order',_paramsObj);
        dialog.confirm('确认取消当前订单？',{
            okText: '确认取消',
            cancelText: '关闭弹框',
            closeCallback: function(value){
                if(value == 0){
                }
                if(value == 1){
                    OrderService.putOrderCancel(_paramsObj).then(
                        function(res){
                            dialog.toast('已成功取消订单！');
                            $state.go('layout.orders');
                        },
                        function(res){

                        }
                    );
                }
            }
        })
    }
    // var orderStatus = CMSDataConfig.orderStatus;
    // var orderType = $stateParams.orderType;
    // for(var i = 0; i<orderStatus.length; i++){
    //     if(orderStatus[i].type == orderType){
    //         window.headerConfig.title = orderStatus[i].text;
    //     }
    // }

    if ($stateParams.status == 8) {
        $scope.fakeNum = 8;
        window.headerConfig={
            enableHeader: true,
            enableBack: true,
            title: '查看详情',
            enableRefresh: false
        };
        $scope.orderDtName = '贾书菊';
        $scope.orderHpName = '长海医院';
        $scope.orderDeptName = '外科';
        $scope.orderDeseName = '肿瘤';
        $scope.orderNum = 'FK1231231';
        $scope.orderDetail = '自稳调节紊乱而发生的异常生命活动过程';
        $scope.orderAmount = 20000;
        $scope.orderFiles = [];
        $scope.patientName = '贾小明';
        $scope.patientNum = '123';
        $scope.mobile = '13402019921';
        // initImgUpload();
    }else{
        getOrderDetail(_paramsObj);
    }

    function initImgUpload(){

        UploadImg.init({
            id: 'uploadImgBox',
            title: '请上传您的病例图片',
            multiple: false, // enable the component can select multiple files in one time. In mobile, please use the false.
            maxCount: 9, // the max number picture could upload.
            // autoUpload: false,
            required: false, //ctrl you must upload images files or not. if false, the UploadImg.isFinished() init is true.
            // imgListArray: [],
            upload: {
                uploadUrl: 'https://up-z0.qbox.me/',
                token: '',
                tokenUrl: window.envs.api_url+'/apiwap/filetoken',
                type: 'POST',
                async: true,
                nameSpace: '',
                submitBtnId: 'btnBooking',
                beforeCall: beforeCall,
                afterCall: afterCall,
                params: {}
            }
        });
    }

    function beforeCall(){

    }

    function afterCall(){

    }

    
    function getOrderDetail(_params){
        var spinner = dialog.showSpinner();
        OrderService.getOrderDetail(_params).then(
            function(res){
                if (res.results.bkStatus!=9) {
                    window.headerConfig={
                        enableHeader: true,
                        enableBack: true,
                        title: '订单详情',
                        enableRefresh: false,
                        otherRightOperate: {
                            enable: true,
                            html: '取消订单',
                            clickCall: cancelOrder
                        }
                    };
                }else{
                    window.headerConfig={
                        enableHeader: true,
                        enableBack: true,
                        title: '订单详情',
                        enableRefresh: false
                    };
                }
                $rootScope.$broadcast('setHeaderConfig', window.headerConfig);

                $scope.orderDtName = res.results.expertName;
                $scope.orderHpName = res.results.hospitalName;
                $scope.orderDeptName = res.results.hpDeptName;
                $scope.orderDeseName = res.results.diseaseName;
                $scope.orderNum = res.results.refNo;
                $scope.orderDetail = res.results.diseaseDetail;
                $scope.orderAmount = res.results.depositTotalAmount;
                $scope.orderFiles = res.results.files;
                $scope.patientName = res.results.patientName;
                $scope.patientNum = res.results.mobile;
                $scope.mobile = res.results.mobile;
                $scope.orderStatusNum = res.results.bkStatus;
                $scope.orderCancelTime= res.results.dateUpdate;
                //根据状态初始化图片上传组件
                setTimeout(function() {
                    initImgUpload();
                }, 500);
                var orderStatus = CMSDataConfig.orderStatus;
                for(var i = 0; i<orderStatus.length; i++){
                    if(orderStatus[i].type == res.results.bkStatus){
                        $scope.orderStatus = orderStatus[i].text;
                    }
                }
                dialog.closeSpinner(spinner.id);
            },
            function(res){
                dialog.closeSpinner(spinner.id);
            }
        );
    }

    $scope.pay = function(){
        $state.go('layout.mark');
    }

}]);