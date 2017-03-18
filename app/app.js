"use strict";

var app = angular.module("Capstone", ['ngRoute'])
    .constant('apiUrl', 'http://localhost:7000');

angular.module("Capstone").config(
    [
        '$interpolateProvider',
        '$httpProvider',
        '$routeProvider',
        '$locationProvider',
        function($interpolateProvider, $httpProvider, $routeProvider, $locationProvider) {

            $interpolateProvider.startSymbol('{{');
            $interpolateProvider.endSymbol('}}');

            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

            $routeProvider
                .when('/home', {
                    controller: "HomeCtrl",
                    templateUrl: 'partials/home.html'
                });
        }
]);