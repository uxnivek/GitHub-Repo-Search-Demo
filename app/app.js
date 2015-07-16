(function () {
  'use strict';

  angular.module('app', [])
    .constant('config', {
      api: {
        endPoint: 'https://api.github.com/',
        usersUrl: 'users/',
        reposUrl: 'repos/',
        reposParam: '/repos',
        langsParam: '/languages'
      }
    });

  // require('./scripts/user.details.controller.js');
  // require('./scripts/user.details.directive.js');
  require('./scripts/userPanel/user.panel.controller.js');
  require('./scripts/userPanel/user.panel.directive.js');
  // require('./scripts/user.repos.directive.js');
  
})();