app.factory('StorageConfig', ['ngStorage', function (ngStorage) {
    //定义了common的localStorage，可以放入app公用的一些数据。注意：此数据会不会因为浏览器关闭而删除，不得放入敏感数据
    var common_storage = ngStorage.localStorage('myzd_common_storage');
    //默认token的sessionStorage，用来存放当前的token。用户关闭浏览器后即删除
    var session_token = ngStorage.sessionStorage('myzd_session_token');
    //底部菜单按钮本地session记录
    var footer_storage = ngStorage.sessionStorage('myzd_footer');
    //临时存储城市等数据
    var city_storage = ngStorage.sessionStorage('myzd_city');
    return {
        COMMON_STORAGE: common_storage,
        FOOTER_STORAGE: footer_storage,
        TOKEN_STORAGE: session_token,
        CITY_STORAGE: city_storage
    };
}]);