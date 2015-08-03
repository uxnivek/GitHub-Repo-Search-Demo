(function () {
	'use strict';

	require('./user.repository.controller.js');

	angular.module('app')
		.directive('userRepos', userReposDirective);

	userReposDirective.$inject = ['config'];

	function userReposDirective (config) {
		return {
			restrict: 'E',
			templateUrl: 'userRepository/user-repository-tpl.html',
			replace: true,
			controller: 'UserRepositoryController',
			controllerAs: 'vm',
			scope: {
				repos: '='
			}
		};
	}

})();
