(function () {
	'use strict';

	angular.module('app')
		
		.directive('userRepos', function (config, UserDetailsController) {
			return {
				restrict: 'E',
				templateUrl: './user-repos-tpl.html',
				replace: true,
				controller: UserDetailsController,
				controllerAs: 'RepoLangsCtrl',
				scope: {
					repos: '='
				}
			};
		});
})();