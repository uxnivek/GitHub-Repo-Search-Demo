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

    // User details
    require('./scripts/userDetails/user.details.directive.js');
    // User panel
    require('./scripts/userPanel/user.panel.controller.js');
    require('./scripts/userPanel/user.panel.directive.js');
    // User repository
    require('./scripts/userRepository/user.repository.controller.js');
    require('./scripts/userRepository/user.repository.directive.js');
  
})();