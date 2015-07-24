(function() {

	angular.module('feed').controller('ListCtrl',function($scope, reddit){
		var vm = this;
		vm.data = {};

		// Get List Items
	 	reddit.getItems().then(function(res) {
	 		if(!res.error){
				vm.data.lists = res.data.children;
	 		}
		});

	 	// Get List with respect to Searched keyword
		vm.searchSubmit = function(){
			var searchKey = vm.search;
			reddit.searchItems(searchKey).then(function(res) {
				if(!res.error){
					vm.data.lists = res.data.children;
		 		}
			});
		}

	});

})();