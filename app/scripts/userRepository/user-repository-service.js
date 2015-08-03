(function () {
	'use strict';

	require('../httpq-service.js');

	angular.module('app')
		.service('userRepositoryService', userRepositoryService);

	userRepositoryService.$inject = ['httpq', '$q'];

	function userRepositoryService(httpq, $q) {
		return {
			fetchRepositoryLangs: fetchRepositoryLangs	
		}

		function repositoryLangsUrl (repo) {
			return 'https://api.github.com/' + 'repos/' + repo.owner.login + '/' + repo.name + '/languages';
		}

		function fetchRepositoryLangs (repo) {
			var deferred = $q.defer();

			httpq.getData(repositoryLangsUrl(repo))
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