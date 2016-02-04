'use strict';

angular.module('app8App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


