(function() {

	angular.module('feed', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

	angular.module('feed').config(function($stateProvider) {

	    $stateProvider.state('list', {
	        url: '/list',
	        templateUrl: 'feed/list/list.html',
	        controller: 'ListCtrl',
	        controllerAs: 'list'
	    });
	    /* Add New States Above */

	});

})();

