(function () {
	'use strict';

	require('./user-repository-service.js');
	var pieChartCreator = require('../pie-chart.js');

	angular.module('app')
		.controller('UserRepositoryController', UserRepositoryController);

	UserRepositoryController.$inject = ['$scope', 'userRepositoryService'];

	function UserRepositoryController($scope, userRepositoryService) {

		$scope.getRepoLangs = getRepoLangs;

		function getRepoLangs (repo) {

			userRepositoryService.fetchRepositoryLangs(repo)
				.then(function (langs) {
					$scope.langs = langs;
					pieChartCreator.createPieChart($scope.langs, repo.id);
				});
		};
		
	};
})();
