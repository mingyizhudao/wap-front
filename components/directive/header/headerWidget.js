app.directive('headerWidget', [function () {
    var ctrl = ['$scope', '$rootScope', 'helper', '$state', function ($scope, $rootScope, helper, $state) {
        var defaults = {
            enableHeader: true,
            enableBack: true,
            enableClose: true,
            enableTitle: true,
            enableRefresh: true,
            enableArea: false,
            enableTab: false,
            otherRightOperate: {
                enable: false,
                html: '',
                clickCall: ''
            },
            title: '名医主刀'
        };
        $scope.defaults = angular.extend(defaults, window.headerConfig);
        document.title = $scope.defaults.title;
        /**
         * This is the $broadcast method for setting headerConfig. So you can use it in controller files like this:
         * -----------------------------------------------------
         * window.headerConfig.title = '小样，你还没有设置title哦';
         * $rootScope.$broadcast('setHeaderConfig', window.headerConfig);
         * -----------------------------------------------------------
         */
        $rootScope.$on('setHeaderConfig', function (event, data) {
            var temp = angular.copy(defaults);
            $scope.defaults = angular.extend(temp, data);
            document.title = $scope.defaults.title;
        });

        /**
         * This is the options for back event. When click the back button. It will filter the options and chose the right operation.
         * Important: the options could use only once. You must clear it before redirect to other page.
         * especially use the 'window.location.href' method, because the code can't run after redirect in some browser.
         *
         * Usually, we only use the back -1, you should not set the options.
         * You can use like this:
         * 1. use the route name where you defined in router.js
         * $scope.$broadcast('setHeaderBack', {
         *     route: 'index',
         *     params: {
         *         name: Atomer,
         *         age: 11
         *     }
         * });
         * 2. use the href url.
         * $scope.$broadcast('setHeaderBack', {
         *     url: 'http://www.mingyizhudao.com/doctor/1101?date=20160808'
         * });
         * 3. use the step. The param type must be number. Usually, it's a negative number.
         * $scope.$broadcast('setHeaderBack', {
         *     step: -2
         * });
         *
         */
        var headerBackOptions = {};
        $scope.$on('setHeaderBack', function (event, data) {
            headerBackOptions = data;
        });
        $scope.goBack = function () {
            helper.closeAllPopAndDialog();
            if (headerBackOptions && !helper.isEmptyObject(headerBackOptions)) {
                if (headerBackOptions.route) {
                    var route = headerBackOptions.route;
                    var params = headerBackOptions.params || {};
                    headerBackOptions = {};
                    $state.go(route, params);
                    return 'back with route.';
                }
                if (headerBackOptions.url) {
                    var url = headerBackOptions.url;
                    headerBackOptions = {};
                    window.location.href = url;
                    return 'back with url.';
                }
                if (headerBackOptions.step && typeof (headerBackOptions.step) === 'number') {
                    var step = headerBackOptions.step;
                    headerBackOptions = {};
                    window.history.go(step);
                    return 'back with step.';
                }
            } else {
                window.history.go(-1);
            }
        };
        /**
         * Refresh the page
         */
        $scope.refresh = function () {
            window.location.reload();
        };
        /**
         * Click the other right operate fn
         */
        $scope.clickOtherRightOperate = function () {
            if($scope.defaults.otherRightOperate.clickCall && typeof $scope.defaults.otherRightOperate.clickCall === 'function'){
                $scope.defaults.otherRightOperate.clickCall();
            }
        };
    }];
    return {
        restrict: 'A',
        transclude: true,
        replace: true,
        controller: ctrl,
        templateUrl: "template/header.html",
        scope: {},
        link: function () {

        }
    }
}]);
app.run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/header.html',
        '<header class="layout-header" id="layoutHeader" ng-show="defaults.enableHeader">\
        <div class="header {{defaults.otherClass}}">\
       <div class="left-operate">\
           <div class="btn-back" ng-show="defaults.enableBack" ng-click="goBack()">\
               <div class="icon-back"></div>\
           </div>\
           <div class="btn-close" ng-show="defaults.enableClose" ng-click="closeHeader()"></div>\
       </div>\
       <div class="title" ng-bind="defaults.title"></div>\
       <div class="right-operate">\
           <div class="btn-refresh" ng-show="defaults.enableRefresh" ng-click="refresh()"></div>\
           <div class="other-right-operate" ng-show="defaults.otherRightOperate.enable" ng-click="clickOtherRightOperate()" ng-bind-html="defaults.otherRightOperate.html | trustAsHtml"></div>\
       </div>\
       </div>\
       </header>');
}]);