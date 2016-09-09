app.service('CommonService',['BaseHttpRequest',function(BaseHttpRequest){
    var apiUrl = window.envs.api_url;
    function sendSMSCodeDto(res){
        return res;
    }
    function validCaptchaDto(res){
        return res;
    }
    function getCityDto(res){
        return res;
    }

    var service = {
        sendSMSCode: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/smsverifycode',
                data: params
            };
            return BaseHttpRequest.post(requestObj, sendSMSCodeDto);
        },
        validCaptcha: function(params){
            var requestObj = {
                url: apiUrl + '/apiwap/validCaptcha',
                data: params
            };
            return BaseHttpRequest.post(requestObj, validCaptchaDto);
        },
        getCity: function(params){
            var requestObj = {
                url: apiUrl + '/apiwap/city',
                params: params
            };
            return BaseHttpRequest.get(requestObj, validCaptchaDto);
        }
    };
    return service;
}]);