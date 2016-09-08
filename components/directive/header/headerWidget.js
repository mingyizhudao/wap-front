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
            areaOperate: {
                enable: false,
                areas: [
                    {
                        name: '全部地区',
                        cityId: 0
                    }
                ],
                trackKey: 'name'
            },
            title: '名医主刀'
        };
        $scope.defaults = angular.extend(angular.copy(defaults), window.headerConfig);
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
            $scope.currentArea = helper.isEmptyObject($scope.defaults.areaOperate.currentArea) ? $scope.defaults.areaOperate.areas[0] : $scope.defaults.areaOperate.currentArea;
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
        $scope.headerBackOptions = {};
        $rootScope.$on('setHeaderBack', function (event, data) {
            $scope.headerBackOptions = data;
        });
        $scope.goBack = function () {
            helper.closeAllPopAndDialog();
            if ($scope.headerBackOptions && !helper.isEmptyObject($scope.headerBackOptions)) {
                if ($scope.headerBackOptions.route) {
                    var route = $scope.headerBackOptions.route;
                    var params = $scope.headerBackOptions.params || {};
                    $scope.headerBackOptions = {};
                    $state.go(route, params);
                    return 'back with route.';
                }
                if ($scope.headerBackOptions.url) {
                    var url = $scope.headerBackOptions.url;
                    $scope.headerBackOptions = {};
                    window.location.href = url;
                    return 'back with url.';
                }
                if ($scope.headerBackOptions.step && typeof ($scope.headerBackOptions.step) === 'number') {
                    var step = $scope.headerBackOptions.step;
                    $scope.headerBackOptions = {};
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
            if ($scope.defaults.otherRightOperate.clickCall && typeof $scope.defaults.otherRightOperate.clickCall === 'function') {
                $scope.defaults.otherRightOperate.clickCall();
            }
        };
        /**
         * control the areas show or hide
         * @type {boolean}
         */
        $scope.showAreas = false;
        $scope.currentArea = helper.isEmptyObject($scope.defaults.areaOperate.currentArea) ? $scope.defaults.areaOperate.areas[0] : $scope.defaults.areaOperate.currentArea;
        $scope.showAreaList = function () {
            $scope.showAreas = !$scope.showAreas;
        };
        $scope.selectCurrentArea = function (item) {
            $scope.currentArea = item;
            $scope.showAreas = false;
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
           <div class="select-area" ng-show="defaults.areaOperate.enable">\
                <div class="current-area" ng-click="showAreaList()"><span class="current-area-text" ng-bind="currentArea[defaults.areaOperate.trackKey]"></span><span class="select-icon" ng-class="{true:\'triangle-up\', false: \'triangle-down\'}[showAreas]"></span></div>\
                <div class="all-area-box" ng-show="showAreas">\
                    <div class="area-list">\
                        <div class="cell-group border-none margin-none">\
                            <div class="cell" ng-repeat="item in defaults.areaOperate.areas" ng-click="selectCurrentArea(item)">\
                                <div class="left-box">\
                                    <span class="active-icon" ng-class="{\'active\': currentArea[defaults.areaOperate.trackKey] === item[defaults.areaOperate.trackKey]}"></span>\
                                </div>\
                                <div class="middle-box text-left">\
                                    <span class="content" ng-bind="item[defaults.areaOperate.trackKey]"></span>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
           </div>\
       </div>\
       </div>\
       </header>');
}]);