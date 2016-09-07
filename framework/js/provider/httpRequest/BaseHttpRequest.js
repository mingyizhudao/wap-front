app.factory('BaseHttpRequest', ['$http', '$q', 'dialog', 'StorageConfig', function ($http, $q, dialog, StorageConfig) {

    var httpRequest = {};
    var defaults = {
        timeout: 6000,
        responseType: "json"
    };
    httpRequest.get = function (requestObj, dataDto) {
        var config = {
            method: 'GET'
        };
        var obj = angular.extend(defaults, angular.extend(config, requestObj));
        _setRequestHeaderAuthor();
        return _responseDto($http(obj), dataDto);
    };
    httpRequest.post = function (requestObj, dataDto) {
        var config = {
            method: 'POST'
        };
        var obj = angular.extend(defaults, angular.extend(config, requestObj));
        _setRequestHeaderAuthor();
        return _responseDto($http(obj), dataDto);
    };
    httpRequest.delete = function (requestObj, dataDto) {
        var config = {
            method: 'DELETE'
        };
        var obj = angular.extend(defaults, angular.extend(config, requestObj));
        _setRequestHeaderAuthor();
        return _responseDto($http(obj), dataDto);
    };
    httpRequest.jsonp = function (requestObj, dataDto) {
        var config = {
            method: 'JSONP'
        };
        var obj = angular.extend(defaults, angular.extend(config, requestObj));
        _setRequestHeaderAuthor();
        return _responseDto($http(obj), dataDto);
    };
    httpRequest.put = function (requestObj, dataDto) {
        var config = {
            method: 'PUT'
        };
        var obj = angular.extend(defaults, angular.extend(config, requestObj));
        _setRequestHeaderAuthor();
        return _responseDto($http(obj), dataDto);
    };
    function _setRequestHeaderAuthor() {
        $http.defaults.headers.common['Authorization'] = StorageConfig.TOKEN_STORAGE.getItem('authorization') || '';
    }

    function _baseReturn(res) {
        return res;
    }

    function _responseDto(httpPromise, dataDto) {
        var promise = httpPromise;
        var deferred = $q.defer();
        var _successFn, _errorFn;
        if (typeof dataDto === 'function') {
            _successFn = dataDto;
            _errorFn = dataDto
        } else {
            if (typeof dataDto === 'object') {
                _successFn = dataDto.hasOwnProperty('successFn') ? dataDto.successFn : _baseReturn;
                _errorFn = dataDto.hasOwnProperty('errorFn') ? dataDto.errorFn : _baseReturn;
            } else {
                _successFn = _baseReturn;
                _errorFn = _baseReturn;
            }
        }
        promise.success(function (data, status, headers, config) {
            if (status === 200) {
                if (data.status === 'ok') {
                    deferred.resolve(_successFn(data));
                } else {
                    deferred.reject(_errorFn(data));
                }
            } else {
                dialog.alert(status + ':服务器错误，请重试');
            }
        }).error(function (data, status, headers, config) {
            dialog.alert(status + ':服务器错误，请重试');
        });
        return deferred.promise;
    }

    return httpRequest;
}]);