(function () {
	'use strict';

	angular.module('app')
		.service('userPanelService', userPanelService);

	userPanelService.$inject = ['$http', '$q'];

	function userPanelService($http, $q) {
		return {
			fetchUserInfo: fetchUserInfo	
		}

		function fetchData (url) {
			var deferred = $q.defer();

			$http.get(url)
				.success(function (response) {
					deferred.resolve(response);
				})
				.error(function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
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

			var userRequest = fetchData(userUrl(username));
			var userReposRequest = fetchData(userReposUrl(username));

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