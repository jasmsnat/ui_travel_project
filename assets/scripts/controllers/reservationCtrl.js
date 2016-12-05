'use strict';
angular.module("travelApp").controller("reservationCtrl", ["$scope", "reservationService", function($scope, reservationService) {
    
    $scope.reservationEntryModel = {
        resId: "",
        resStartDate: "",
        resEndDate: "",
        resFirstName: "",
        resLastName: "",
        resEmail: "",
        resGuestCount: "",
        resDestination: "",
    };
        
    reservationService.reservationEntryModelObj = $scope.reservationEntryModel;
    $scope.reservationEntryArray = [];
    
    $scope.resetReservationEntryModel = {};
    function resetReservation() {
        $scope.reservationEntryModel = angular.copy($scope.resetReservationEntryModel);
        reservationService.reservationEntryModelObj = $scope.reservationEntryModel;
    };
    
    $scope.reservationEntryFunctions = {
        addReservation: function() {
            alert("controller-alert");
            reservationService.addReservationEntry().then(function() {
                resetReservation();
            })
        }
    };
    
}]);