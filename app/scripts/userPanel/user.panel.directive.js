(function () {
	'use strict';

	angular.module('app')
		.directive('userPanel', userPanel);

	userPanel.$inject = ['config', 'UserPanelController'];

	function userPanel (config, UserPanelController) {
		console.log(UserPanelController)
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'user-panel-tpl.html',
			controller: UserPanelController,
			controllerAs: 'UserCtrl' // Controller alias which will be used in the template
		};
	};

})();

