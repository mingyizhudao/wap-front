app.service('UserService', ['BaseHttpRequest',function (BaseHttpRequest) {
    var apiUrl = window.envs.api_url;
    function getDataDto(res){
        return res;
    }

    var service = {
        getData: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/quickbooking',
                data: params
            };
            return BaseHttpRequest.post(requestObj, getDataDto());
        }
    };
    return service;
}]);