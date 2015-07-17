(function () {
	'use strict';

	// var userDetailsTpl = require('./user-details-tpl.html');

	angular.module('app')
		
		.directive('userDetails', userDetailsDirective);

	function userDetailsDirective () {
		return {
			restrict: 'E',
			templateUrl: 'userDetails/user-details-tpl.html',
			replace: true,
			scope: {
				user: '='
			}
		};
	}

})();