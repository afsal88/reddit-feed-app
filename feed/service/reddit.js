(function() {
	

	function redditService($http,$q) {

		var reddit = {};

		// Service layer for getting intial List
		function getItems(){
			var deferred = $q.defer(); 
			$http({
				method: 'GET',
				url: 'http://www.reddit.com/r/webdev.json',
			}).success(function(data, status, headers, config) {    
				deferred.resolve(data);
			}).error(function(data, status, headers, config) {
				deferred.resolve(false);
			});   
			return deferred.promise;

		}

		// Service layer for getting List with respect to Searched keyword
		function searchItems(keyword){
			var deferred = $q.defer(); 
			$http({
				method: 'GET',
				url: 'http://www.reddit.com/r/'+keyword+'.json',
			}).success(function(data, status, headers, config) {    
				deferred.resolve(data);
			}).error(function(data, status, headers, config) {
				deferred.resolve(false);
			});   
			return deferred.promise;
		}

		/************Functions available in redditService***********/
		reddit.getItems = getItems;
		reddit.searchItems = searchItems;
		/************Functions available in redditService***********/

		return reddit;
	}


	angular.module('feed').factory('reddit',redditService);

})();
