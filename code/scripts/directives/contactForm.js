'use strict';
angular.module("travelApp").directive("contactForm", function() {
    return {
        restrict: "EAC",
        controller: "contactCtrl",
        templateUrl: "/code/views/contactForm.html"
    };
});