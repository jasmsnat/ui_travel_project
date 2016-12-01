'use strict';
angular.module("travelApp").directive("navBar", function() {
    return {
        rerstrict: "EAC",
        controller: "navBarCtrl",
        templateUrl: "/code/views/navBar.html"
    };
});