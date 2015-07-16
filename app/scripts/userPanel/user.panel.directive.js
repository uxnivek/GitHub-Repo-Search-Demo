(function () {
	'use strict';

	angular.module('app')
		.directive('userPanel', userPanelDirective);

	userPanelDirective.$inject = ['config'];

	function userPanelDirective (config) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'userPanel/user-panel-tpl.html',
			controller: UserPanelController,
			controllerAs: 'UserCtrl' // Controller alias which will be used in the template
		};

		function UserPanelController($http) {
			var user = this;
			user.details = {};
			user.repos = [];
			user.message = '';
			user.searchUser = searchUser;

			function searchUser (username) {

				// Fetch user
				$http.get(config.api.endPoint + config.api.usersUrl + username )
					.success(function (result) {
						user.details = result;
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
	};

})();

