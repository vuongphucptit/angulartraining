var routeApp = angular.module('routeApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ngRoute']);

routeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/screenA', {
                templateUrl: 'screen/screenA.html',
                controller: 'ShowScreenA'
            }).
            when('/screenB', {
                templateUrl: 'screen/screenB.html',
                controller: 'ShowScreenB'
            }).
            when('/screenC', {
                templateUrl: 'screen/screenC.html',
                controller: 'ShowScreenC'
            }).
            when('/screenD', {
                templateUrl: 'screen/screenD.html',
                controller: 'ShowScreenD'
            }).
            otherwise({
                redirectTo: '/screenA'
            });
    }
]);

routeApp.controller('ShowScreenA', function ($scope) {
    $scope.message = 'Content Screen A';
});

routeApp.controller('ShowScreenB', function ($scope) {
    $scope.message = 'Content Screen B';
});

routeApp.controller('ShowScreenC', function ($scope) {
    $scope.message = 'Content Screen C';
});

routeApp.controller('ShowScreenD', function ($scope) {
    $scope.message = 'Content Screen D';
});