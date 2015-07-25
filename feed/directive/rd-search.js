(function() {

	function rdSearch(reddit) {
		return {
			restrict: 'A',
			link: function(scope, element, attrs, fn) {
				$(element).keypress(function(event) {
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
	}

	angular.module('feed').directive('rdSearch', rdSearch);

})();