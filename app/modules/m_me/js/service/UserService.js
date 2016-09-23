app.service('UserService', ['BaseHttpRequest',function (BaseHttpRequest) {
    var apiUrl = window.envs.api_url;
    function getDataDto(res){
        return res;
    }
    function getOrderListDto(res){
        return res;
    }

    var service = {
        getData: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/quickbooking',
                data: params
            };
            return BaseHttpRequest.post(requestObj, getDataDto());
        },
        getOrderList: function(opt){
            console.log('opt',opt);
            var requestObj = {
                url: apiUrl +　'/apiwap/userbooking?bk_status='+ opt.bk_status
                // url: 'http://192.168.11.196/apiwap/userbooking?bk_status=1'
            };
            return BaseHttpRequest.get(requestObj, getOrderListDto());
        }
    };
    return service;
}]);