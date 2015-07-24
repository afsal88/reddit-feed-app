(function() {
	
	angular.module('feed').factory('reddit',function($http,$q) {

		var reddit = {};

		reddit.getItems = function(){
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

		},
		reddit.searchItems = function(keyword){
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

		return reddit;
	});

})();
