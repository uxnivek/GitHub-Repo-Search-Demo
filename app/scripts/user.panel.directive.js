(function () {
	'use strict';

	require('./user-panel-tpl.html');

	angular.module('app')
		
		.config(function ($httpProvider, config) {
			$httpProvider.interceptors.push(config.interceptor);
		})
		
		.directive('userPanel', function (config, UserPanelController) {
			return {
				restrict: 'E',
				templateUrl: './user-panel-tpl.html',
				replace: true,
				controller: UserPanelController,
				controllerAs: 'UserCtrl' // Controller alias which will be used in the template
			};
		});
})();

