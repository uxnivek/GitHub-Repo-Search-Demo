(function () {
	'use strict';

	angular.module('app')
		.service('httpq', httpq);

	httpq.$inject = ['$http', '$q'];

	function httpq($http, $q) {
		return {
			getData: getData	
		}

		function getData (url) {
			var deferred = $q.defer();

			$http.get(url)
				.success(function (response) {
					deferred.resolve(response);
				})
				.error(function (error) {
					deferred.reject(error);
				});

			return deferred.promise;
		}

	}
	
})();