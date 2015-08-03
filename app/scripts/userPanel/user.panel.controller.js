(function () {
	'use strict';

	require('./user-panel-service.js');

	angular.module('app')
		.controller('UserPanelController', UserPanelController);

	UserPanelController.$inject = ['$scope', 'userPanelService'];

	function UserPanelController($scope, userPanelService) {
		var vm = this;
		
		vm.searchUser = searchUser;

		function searchUser (username) {
			userPanelService
				.fetchUserInfo(username)
				.then(function (data) { 
					vm.user = data; 
				});
		}
	}

})();
