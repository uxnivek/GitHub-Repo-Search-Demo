(function () {
	'use strict';

	angular.module('app')
		
		.directive('userDetails', function () {
			return {
				restrict: 'E',
				templateUrl: 'views/user-details.html',
				replace: true,
				scope: {
					user: '='
				}
			};
		});
})();