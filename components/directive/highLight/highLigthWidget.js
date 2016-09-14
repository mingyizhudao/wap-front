app.directive('highLightWidget', function () {
    var ctrl = ['$scope', function ($scope) {
        // console.log('?',$scope.defaultValue.indexOf($scope.highLightValue));
        if ($scope.defaultValue.indexOf($scope.highLightValue)!=-1) {
            var _defaultValue = $scope.defaultValue;
            var _highLightValue = $scope.highLightValue;
            var _vArray = _defaultValue.split(_highLightValue);
            if(_vArray.length>2&&_vArray[2]==''&&_vArray[1]==''){
                $scope.dv1 = _vArray[0];
                $scope.lv = _highLightValue + _highLightValue;
            }else{
                $scope.dv1 = _vArray[0];
                $scope.dv2 = _vArray[1];
                $scope.lv = _highLightValue;
            }
        }
    }];
    return {
        restrict: 'E',
        replace: true,
        controller: ctrl,
        templateUrl: "template/highLight.html",
        scope: {
            highLightValue: '=',
            defaultValue: '='
        }
    }
});
app.run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/highLight.html',
        '<p class="high-light-widget">\
            <span ng-bind="dv1"></span><span class="high-light-text" ng-bind="lv"></span><span ng-bind="dv2"></span>\
        </p>');
}]);