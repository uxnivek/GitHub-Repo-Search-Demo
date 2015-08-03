(function () {
	'use strict';

	require('./user-repository-service.js');
	var pieChartCreator = require('../pie-chart.js');

	angular.module('app')
		.controller('UserRepositoryController', UserRepositoryController);

	UserRepositoryController.$inject = ['userRepositoryService'];

	function UserRepositoryController(userRepositoryService) {
		var vm = this;
		vm.showId = '';
		vm.showChart = false;

		vm.getRepoLangs = getRepoLangs;

		function getRepoLangs (repo) {
			vm.showId = repo.id;

			userRepositoryService.fetchRepositoryLangs(repo)
				.then(function (langs) {
					vm.langs = langs;
					vm.id = repo.id;
					vm.showChart = true;
					vm.reponame = repo.name;
					pieChartCreator.createPieChart(vm.langs, vm.id);
				});
		};
		
	};
})();
