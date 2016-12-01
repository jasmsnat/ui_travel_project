'use strict';
angular.module("travelApp", ['ngRoute']);

angular.module("travelApp").config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
    
    $routeProvider
        .when("/destinations", {
            controller: "destinationsCtrl",
            templateUrl: "/code/views/destinations.html"
    })
        .when("/reservation", {
            controller: "reservationCtrl",
            templateUrl: "/code/views/reservationForm.html"
    })
        .when("/contact", {
            controller: "contactCtrl",
            templateUrl: "/code/views/contactForm.html"
    })
        .otherwise({
            templateUrl: "/code/views/error.html"
    });
    
    $locationProvider
        .html5Mode(false)
        .hashPrefix("!");
    
}]);