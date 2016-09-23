app.service('DoctorService',['BaseHttpRequest',function(BaseHttpRequest){
    var apiUrl = window.envs.api_url;

    function getDoctorByQueryDto(res){
    	return res;
    }
    function getDoctorDetailDto(res){
        return res;
    }
    function getDetpListDto(res){
        return res;
    }
    function getDiseaseListDto(res){
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
        getDoctorDetail: function(opt){
            var requestObj = {
                url: apiUrl +　'/apiwap/doctor/'+opt.id
            };
            return BaseHttpRequest.get(requestObj, getDoctorDetailDto);
        },
        getDetpList: function(){
            var requestObj = {
                url: apiUrl +　'/apiwap/diseasecategory'
            };
            return BaseHttpRequest.get(requestObj,getDetpListDto);
        },
        getDiseaseList: function(opt){
            var requestObj = {
                url: apiUrl +　'/apiwap/diseasebycategory/'+opt.deptId
            };
            return BaseHttpRequest.get(requestObj,getDiseaseListDto);
        }
    };
    return service;
}]);