(function () {
	'use strict';

	// var userDetailsTpl = require('./user-details-tpl.html');

	angular.module('app')
		
		.directive('userDetails', function () {
			return {
				restrict: 'E',
				templateUrl: './user-details-tpl.html',
				replace: true,
				scope: {
					user: '='
				}
			};
		});
})();