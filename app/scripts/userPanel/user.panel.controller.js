(function () {
	'use strict';

	require('./user-panel-service.js');

	angular.module('app')
		.controller('UserPanelController', UserPanelController);

	UserPanelController.$inject = ['$scope', '$http', '$q', 'userPanelService'];

	function UserPanelController($scope, $http, $q, userPanelService) {
		var vm = this;
		$scope.searchUser = searchUser;

		function searchUser (username) {
			var user = {};
			var userRequest = userPanelService.fetchUser(username);
			var userReposRequest = userPanelService.fetchUserRepos(username);
			
			$q.all([
				userRequest.then(function (data) {
					user.details = data;
				}), 
				userReposRequest.then(function (data) {
					user.repos = data;
				})
			])
			.then(function () {
				vm = user;
			});
		}
	}

})();
