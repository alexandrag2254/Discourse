'use strict';

// Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        // Application routing definition
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        }).
        when('/chapter_profile/:chapter', {
            templateUrl: 'views/chapter_profile.html',
            controller: 'IndexController'
        }).
        when('/user_profile/:id', {
            templateUrl: 'views/user_profile.html',
            controller: 'IndexController'
        }).
        when('/global', {
            templateUrl: 'views/global.html',
            controller: 'IndexController'
        }).
        when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'IndexController'
        }).
        when('/local', {
            templateUrl: 'views/local.html',
            controller: 'IndexController'
        }).
        when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'AuthenticationController'
        }).
        when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'AuthenticationController'
        }).
        when('/local_post', {
            templateUrl: 'views/local_post.html',
            controller: 'IndexController'
        }).
        when('/post/:id', {
            templateUrl: 'views/local_comment.html',
            controller: 'IndexController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);