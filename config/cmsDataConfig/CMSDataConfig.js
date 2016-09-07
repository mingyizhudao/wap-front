app.factory('CMSDataConfig', ['StorageConfig', '$state', function (StorageConfig, $state) {
    var data = {};
    data.appMenus = [
        {
            text: '首页',
            class: 'icon-home',
            route: 'layout.home',
            url: '/layout/home'
        },
        {
            text: '医院',
            class: 'icon-hospital',
            route: 'layout.hospital',
            url: '/layout/hospital'
        },
        {
            text: '发现',
            class: 'icon-find',
            route: 'layout.find',
            url: '/layout/find'
        },
        {
            text: '个人',
            class: 'icon-me',
            route: 'layout.me',
            url: '/layout/me',
            beforeCall: function () {
                if (!StorageConfig.TOKEN_STORAGE.getItem('authorization')) {
                    $state.go('layout.login',{
                        redirectRoute: encodeURIComponent('layout.me')
                    });
                    return false;
                }
                return true;
            }
        }
    ];
    return data;
}]);