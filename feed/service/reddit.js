(function() {
	

	function redditService($http,$q) {

		var reddit = {};

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

		reddit.getItems = getItems;
		reddit.searchItems = searchItems;
		return reddit;
	}


	angular.module('feed').factory('reddit',redditService);

})();
