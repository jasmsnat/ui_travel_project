'use strict';
angular.module("travelApp", ['ngRoute']);

angular.module("travelApp").config(["$locationProvider", "$routeProvider", function($locationProvider, $routeProvider) {
    
    $routeProvider
        .when("/", {
            controller: "reservationCtrl",
            templateUrl: "/code/views/reservationForm.html"
    })
        .when("/", {
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