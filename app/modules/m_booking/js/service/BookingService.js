app.service('BookingService',['BaseHttpRequest',function(BaseHttpRequest){
    var apiUrl = window.envs.api_url;

    function bookingWidthDepartmentOrDoctorDto(res){
        return res;
    }

    var service = {
        bookingWidthDepartmentOrDoctor: function(params){
            var requestObj = {
                url: apiUrl +　'/apiwap/booking',
                data: params
            };
            return BaseHttpRequest.post(requestObj, bookingWidthDepartmentOrDoctorDto);
        }
    };
    return service;
}]);