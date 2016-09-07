app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/layout/home');
    $urlRouterProvider.when('/layout', '/layout/home');
    $stateProvider
        .state('test', {
            url: '/test',
            templateUrl: 'app/modules/m_test/view/index.html'
        })
        .state('layout', {
            url: '/layout',
            templateUrl: 'app/modules/m_layout/view/index.html'
        })
        .state('layout.home',{
            url: '/home',
            templateUrl: 'app/modules/m_home/view/index.html'
        })
        .state('layout.hospital',{
            url: '/hospital',
            templateUrl: 'app/modules/m_hospital/view/index.html'
        })
        .state('layout.find', {
            url: '/find',
            templateUrl: 'app/modules/m_find/view/index.html'
        })
        .state('layout.me', {
            url: '/me',
            templateUrl: 'app/modules/m_me/view/index.html'
        })
        .state('layout.login', {
            url: '/login?redirectUri&redirectRoute&backRoute&backUrl',
            templateUrl: 'app/modules/m_login/view/login.html'
        })
        .state('layout.register', {
            url: '/register',
            templateUrl: 'app/modules/m_register/view/register.html'
        })
}]);