app.service('OrderService', ['BaseHttpRequest',function (BaseHttpRequest) {
    var apiUrl = window.envs.api_url;
    function getOrderDetailDto(res){
        return res;
    }

    var service = {
        getOrderDetail: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/userbooking/'+params.bookingId
            };
            return BaseHttpRequest.get(requestObj, getOrderDetailDto());
        }
    };
    return service;
}]);