(function() {

	angular.module('feed', ['ui.bootstrap', 'ui.utils',	'ui.router', 'ngAnimate' ]);


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

