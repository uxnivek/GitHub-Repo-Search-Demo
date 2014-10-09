(function () {
  'use strict';

  var interceptor = function ($q, $location, $log) {
      return {
          request: function (config) {
              return config;
          },

          response: function (result) {
              return result;
          },

          responseError: function (rejection) {
              $log.log('Failed with', rejection.status, 'status');
              if (rejection.status === 403) {
                  $location.url('/');
              }

              return $q.reject(rejection);
          }
      };
  };

  angular
    .module('app', [])

    .constant('config', {
      interceptor: interceptor,
      api: {
        endPoint: 'https://api.github.com/',
        usersUrl: 'users/',
        reposUrl: 'repos/',
        reposParam: '/repos',
        langsParam: '/languages'
      }
    });
})();