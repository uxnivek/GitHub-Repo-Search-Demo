(function () {
	'use strict';

	angular.module('app')
		.service('userPanelService', userPanelService);

	userPanelService.$inject = ['$http', '$q'];

	function userPanelService($http, $q) {
		return {
			fetchUser: fetchUser,
			fetchUserRepos: fetchUserRepos			
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

		function fetchUserRepos (username) {
			var userReposUrl = 'https://api.github.com/' + 'users/' + username + '/repos';

			// Fetch user repos
			return fetchData(userReposUrl);
		}

		function fetchUser (username) {
			var userUrl = 'https://api.github.com/' + 'users/' + username;

			// Fetch user
			return fetchData(userUrl);
		}
	}
	
})();