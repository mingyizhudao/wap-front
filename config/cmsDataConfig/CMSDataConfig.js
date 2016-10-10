app.factory('CMSDataConfig', ['StorageConfig', '$state', function (StorageConfig, $state) {
    var data = {};
    data.appMenus = [
        {
            text: '首页',
            class: 'icon-shouye',
            route: 'layout.home',
            url: '/layout/home'
        },
        {
            text: '医院',
            class: 'icon-zantong',
            route: 'layout.hospital',
            url: '/layout/hospital'
        },
        {
            text: '发现',
            class: 'icon-xihuan',
            route: 'layout.find',
            url: '/layout/find'
        },
        {
            text: '个人',
            class: 'icon-wode',
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