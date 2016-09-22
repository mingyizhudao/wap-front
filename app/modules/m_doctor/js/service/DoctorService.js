app.service('DoctorService',['BaseHttpRequest',function(BaseHttpRequest){
    var apiUrl = window.envs.api_url;

    function getDoctorByQueryDto(res){
    	return res;
    }

    var service = {
        getDoctorByQuery: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/doctor',
                params: params
            };
            return BaseHttpRequest.get(requestObj, getDoctorByQueryDto);
        },
    };
    return service;
}]);