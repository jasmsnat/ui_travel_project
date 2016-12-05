'use strict';
angular.module("travelApp").directive("reservationForm", function() {
    return {
        restrict: "EAC",
        controller: "reservationCtrl",
        templateUrl: "/code/views/reservationForm.html"
    };
});