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
        .state('layout.hospital-detail', {
            url: '/hospital/:hospitalId',
            templateUrl: 'app/modules/m_hospital/view/hospital-detail.html'
        })
        .state('layout.department', {
            url: '/hospital/:hospitalId/:departmentId?departmentName&hospitalName',
            templateUrl: 'app/modules/m_hospital/view/department.html'
        })
        .state('layout.booking-department', {
            url: '/booking/department/:hospitalId/:departmentId?departmentName&hospitalName',
            templateUrl: 'app/modules/m_booking/view/booking-department.html'
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
            url: '/register?redirectUri&redirectRoute&backRoute&backUrl',
            templateUrl: 'app/modules/m_register/view/register.html'
        })
        .state('layout.search',{
            url: '/search',
            templateUrl: 'app/modules/m_search/view/index.html'
        })
}]);