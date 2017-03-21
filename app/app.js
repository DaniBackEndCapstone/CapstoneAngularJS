"use strict";

var app = angular.module("Capstone", ['ngRoute', 'usMap'])
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
                .when('/', {
                    controller: "HomeCtrl",
                    templateUrl: 'partials/home.html'
                })
                .when('/about', {
                    // controller: "AboutCtrl",
                    templateUrl: 'partials/about.html'
                })
                .when('/correctionspopulation', {
                    controller: "CorrectionsPopulationCtrl",
                    templateUrl: 'partials/correctionspopulation.html'
                })
                .when('/prisons', {
                    controller: "PrisonsCtrl",
                    templateUrl: 'partials/prisons.html'
                });
        }
]);