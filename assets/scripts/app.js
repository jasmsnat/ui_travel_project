'use strict';

var myApp = angular.module("travelApp", ['ui.bootstrap', 'ui.router', 'ui.navbar', 'angular-flexslider']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("404");
    // Now set up the states
    $stateProvider
        .state('root', {
            abstract: true,
            views: {
                'navi': {
                    controller: "NavigationController",
                    templateUrl: "/templates/main-navigation.html"
                },
                'main': {
                    template: "<div ui-view></div>"
                }
            }
        })
        .state('home', {
            parent: "root",
            url: "/",
            views: {
                '': {
                    templateUrl: "/templates/home.html"
                },
                'more-destination@home': {
                    controller: "MoreDestination",
                    templateUrl: "/templates/more-destination.html"
                }
            }
        })
        .state('destination1', {
            parent: "root",
            url: "/destination1",
            templateUrl: "/templates/destinations.html"
        })
        .state('destination2', {
            parent: "root",
            url: "/destination2",
            controller: "MoreDestination",
            templateUrl: "/templates/more-destination.html"
        })
        .state('trip1', {
            parent: "root",
            url: "/trip1",
            templateUrl: "/templates/trips.html"
        })
        .state('trip2', {
            parent: "root",
            url: "/trip2",
            templateUrl: "/templates/trips.html"
        })
        .state('404', {
            parent: "root",
            url: "/404",
            templateUrl: "/templates/404.html"
        })
        .state('contact-us', {
            url: "/contact-us",
            templateUrl: "/templates/contact-us.html"
        })
}]);
