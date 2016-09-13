
app.run(['$templateCache', function ($templateCache) {
    $templateCache.put('template/landscapeScroll.html',
        '<div class="landscapeScroll-warp">\
        	<div class="landscapeScroll-containt" ng-transclude>\
        	</div>\
        	<div class="landscapeScroll-pagination-bar">\
        	</div>\
        </div>'
    );
}]);

app.directive('landscapeScroll', function(){
	
	var landscapeScrollCtrl = ['$scope', function($scope){
		var _warps = document.querySelectorAll('[scroll-id]');
		var _warp,_containt,_pagination;
		var _timeFlag = 0, _timer, _timeInterval = 2000;
		var _startX,_endX;
		function _init (){ //初始化，生成html，绑定滑动事件
			var _innerPagination = '';
			for(var i = 0; i<$scope.itemNum; i++){
				_innerPagination += '<span></span>'
			}
			_pagination = document.getElementsByClassName('landscapeScroll-pagination-bar')[0];
			_pagination.innerHTML=_innerPagination;

			_warp.addEventListener('touchstart', function(e){
		        var touchobj = e.changedTouches[0];
				_startX = touchobj.pageX;
			    e.preventDefault();
			}, false);
			 
			_warp.addEventListener('touchmove', function(e){
			    e.preventDefault() ;
			}, false);
			 
			_warp.addEventListener('touchend', function(e){
		        var touchobj = e.changedTouches[0];
				_endX = touchobj.pageX;
				if(_startX>_endX){ //<==
					clearInterval(_timer);
					_transformContent();
					_timeStart();
				}else if(_startX<_endX){ //==>
					clearInterval(_timer);
					_transformContent(-1);
					_timeStart();
				}
		        e.preventDefault()
		    }, false);
			_timeStart();
		}
		function _timeStart(){
			_timer = setInterval(function(){
				_transformContent();
			},_timeInterval);
		}
		function _transformContent(x){
			//运动方向
			var _direction = x?x:1;
			//查找当前运动对象
			var _curChild = _warp.getElementsByClassName('testsroll')[_timeFlag];
			var _curPagination = _warp.getElementsByClassName('landscapeScroll-pagination-bar')[0].getElementsByTagName('span')[_timeFlag];
			//设置标记
			_timeFlag = (_timeFlag+_direction)==$scope.itemNum?0:(_timeFlag+_direction)<0?($scope.itemNum-1):(_timeFlag+_direction);
			//查找下一个运动对象
			var _nextChild = _warp.getElementsByClassName('testsroll')[_timeFlag];
			var _nextPagination = _warp.getElementsByClassName('landscapeScroll-pagination-bar')[0].getElementsByTagName('span')[_timeFlag];
			//动画
			_curChild.style.opacity = '0.0';
			_nextChild.style.opacity = '1.0';
			_curPagination.style.opacity = '0.5';
			_nextPagination.style.opacity = '1.0';
		}
		for(var i=0; i<_warps.length; i++){
			if (_warps[i].getAttribute('scroll-id') == $scope.scrollId) {
				_warp = _warps[i];
				_containt = _warp.getElementsByClassName('landscapeScroll-containt')[0];
				_init();
			}
		}
	}];

	return {
		restrict: 'E',
		scope: {
		    scrollId: '@',
		    itemNum: '@'
		},
		controller: landscapeScrollCtrl,
        transclude: true,
		templateUrl: 'template/landscapeScroll.html'
	}
});
