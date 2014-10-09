(function () {
	'use strict';

	angular.module('app')
		
		.config(function ($httpProvider, config) {
	        $httpProvider.interceptors.push(config.interceptor);
	    })
		
		.directive('userPanel', function (config) {
			return {
				restrict: 'E',
				templateUrl: 'views/user-panel.html',
				replace: true,
				controller: function ($http) {
					var user = this;
					user.details = {};
					user.repos = [];
					user.message = '';

					this.searchUser = function (username) {

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
				},
				controllerAs: 'UserCtrl' // Controller alias which will be used in the template
			};
		});
})();

