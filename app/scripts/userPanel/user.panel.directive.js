(function () {
	'use strict';

	require('./user.panel.controller.js');

	angular.module('app')
		.directive('userPanel', userPanelDirective);

	userPanelDirective.$inject = ['$http'];

	function userPanelDirective ($http) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'userPanel/user-panel-tpl.html',
			controller: 'UserPanelController',
			controllerAs: 'UserCtrl'
		};
	};

})();
