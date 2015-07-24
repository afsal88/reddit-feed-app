(function() {

	angular.module('feed', [
		'ui.bootstrap',							// UI Bootstrap 
		'ui.utils',								// UI Utils
		'ui.router',							// UI Router
		'ngAnimate'								// NG Animate
	]);


	function config($stateProvider){
		$stateProvider.state('list', {
	        url: '/list',
	        templateUrl: 'feed/list/list.html',
	        controller: 'ListCtrl',
	        controllerAs: 'list'
	    });
	    /* Add New States Above */
	}


	angular.module('feed').config(config);

})();

