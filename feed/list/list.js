(function() {

	var listCtrlFn = function($scope, reddit){
		var vm = this;
		vm.data = {};

		// Get List Items
		reddit.getItems().then(function(res) {
			if(!res.error){
				vm.data.lists = res.data.children;
			}
		});

	};

	angular.module('feed').controller('ListCtrl', listCtrlFn);

})();