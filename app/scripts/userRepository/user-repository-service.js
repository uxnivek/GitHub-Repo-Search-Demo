(function () {
	'use strict';

	angular.module('app')
		.service('userRepositoryService', userRepositoryService);

	userRepositoryService.$inject = ['$http', '$q'];

	function userRepositoryService($http, $q) {
		return {
			fetchRepositoryLangs: fetchRepositoryLangs	
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

		function repositoryLangsUrl (repo) {
			return 'https://api.github.com/' + 'repos/' + repo.owner.login + '/' + repo.name + '/languages';
		}

		function fetchRepositoryLangs (repo) {
			var deferred = $q.defer();

			fetchData(repositoryLangsUrl(repo))
				.then(function (data) {
					deferred.resolve(data);
				})
				.catch(function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
		}

	}
	
})();