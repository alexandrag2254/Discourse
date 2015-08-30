'use strict';

angular.module('mean').controller('IndexController', ['$scope', 'Authentication',
    function($scope, Authentication) {
        $scope.authentication = Authentication;
        console.log("index controller", $scope.authentication);
    }
]);