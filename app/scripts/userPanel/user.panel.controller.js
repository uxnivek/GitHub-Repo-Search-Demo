(function () {
	'use strict';

	angular.module('app')
		.controller('UserPanelController', UserPanelController);

	UserPanelController.$inject = ['$http', 'config'];

	function UserPanelController($http, config) {
		var user = this;
		user.details = {};
		user.repos = [];
		user.message = '';
		user.searchUser = searchUser;

		function searchUser (username) {

			// Fetch user
			$http.get(config.api.endPoint + config.api.usersUrl + username)
				.success(function (response) {
					user.details = response;
					user.message = '';
				})
				.error(function (error) {
					user.message = error.message;
				});

			// Fetch user repos
			$http.get(config.api.endPoint + config.api.usersUrl + username + config.api.reposParam)
				.success(function (repos) {
					user.repos = repos;
					user.message = '';
				})
				.error(function (error) {
					user.message = error.message;
				});
		};
	};
})();
