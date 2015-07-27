(function() {

	// Directive for getting List with respect to Searched keyword
	// Currently works with enter key submission
	var rdSearchFn = function(reddit) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs, fn) {
				element.keypress(function(event) {
					var searchKey = this.value;
					if(event.which === 13) {
						reddit.searchItems(searchKey).then(function(res) {
							if(!res.error){
								scope.list.data.lists = res.data.children;
							}							
						});
					}
				});
			}
		};
	};

	angular.module('feed').directive('rdSearch', rdSearchFn);

})();