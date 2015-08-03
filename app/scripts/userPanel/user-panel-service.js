(function () {
	'use strict';

	require('../httpq-service.js');

	angular.module('app')
		.service('userPanelService', userPanelService);

	userPanelService.$inject = ['httpq', '$q'];

	function userPanelService(httpq, $q) {
		return {
			fetchUserInfo: fetchUserInfo
		}

		function userUrl (username) {
			return 'https://api.github.com/' + 'users/' + username;
		}

		function userReposUrl (username) {
			return 'https://api.github.com/' + 'users/' + username + '/repos';
		}

		function fetchUserInfo (username) {
			var user = {};
			var deferred = $q.defer();

			var userRequest = httpq.getData(userUrl(username));
			var userReposRequest = httpq.getData(userReposUrl(username));

			$q.all([
				userRequest.then(function (data) {
					user.details = data;
				}), 
				userReposRequest.then(function (data) {
					user.repos = data;
				})
			]).then(function (date) {
				deferred.resolve(user)
			}).catch(function (error) {
				deferred.reject(error);
			});

			return deferred.promise;
		}
	}
	
})();