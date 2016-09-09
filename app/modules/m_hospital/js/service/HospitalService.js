app.service('HospitalService',['BaseHttpRequest',function(BaseHttpRequest){
    var apiUrl = window.envs.api_url;
    function getHospitalByQueryDto(res){
        return res;
    }

    var service = {
        getHospitalByQuery: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/hospital',
                params: params
            };
            return BaseHttpRequest.get(requestObj, getHospitalByQueryDto());
        }
    };
    return service;
}]);