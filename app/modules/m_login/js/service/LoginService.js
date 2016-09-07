app.service('LoginService',['BaseHttpRequest',function(BaseHttpRequest){
    var apiUrl = window.envs.api_url;
    function passwordLoginDto(res){
        return res;
    }
    function codeLoginDto(res){
        return res;
    }

    var service = {
        passwordLogin: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/userlogin',
                data: params
            };
            return BaseHttpRequest.post(requestObj, passwordLoginDto);
        },
        codeLogin: function(params){
            var requestObj = {
                url: apiUrl + '/apiwap/codelogin',
                data: params
            };
            return BaseHttpRequest.post(requestObj, codeLoginDto);
        }
    };
    return service;
}]);