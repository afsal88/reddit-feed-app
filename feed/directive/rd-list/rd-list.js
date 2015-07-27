(function() {

	var rdListFn = function() {
		return {
			restrict: 'EA',
			templateUrl: 'feed/directive/rd-list/rd-list.html',
			link: function(scope, element, attrs, fn) {


			}
		};
	};
	

	angular.module('feed').directive('rdList', rdListFn);


})();
