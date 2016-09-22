app.controller('DoctorCtrl', ['$scope', '$rootScope', 'DoctorService','$state', 'dialog', '$stateParams', function ($scope, $rootScope, DoctorService, $state, dialog, $stateParams) {
    
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
            $scope.selectedIndex = _index;
        }
    }
    $scope.hideContent = function(){
        $scope.selectedIndex = false;
        $scope.isShowContent = false;
    }
    $scope.clickList = function($event){
        $event.stopPropagation();
    }

    selectedCall({id:0});
    function selectedCall(item) {
        var spinner = dialog.showSpinner();
        // StorageConfig.CITY_STORAGE.putItem('hospitalCityCurrent', item);
        var params = {
            city: item.id
        };
        if($stateParams.diseasesId!=''){
            params.disease = $stateParams.diseasesId;
        }
        DoctorService.getDoctorByQuery(params).then(function(res){
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

}]);