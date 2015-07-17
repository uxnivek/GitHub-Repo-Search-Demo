(function () {
    'use strict';

    module.exports = angular.module('app', [])
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
    require('./scripts/userPanel/user.panel.directive.js');
    // User repository
    require('./scripts/userRepository/user.repository.directive.js');

})();
