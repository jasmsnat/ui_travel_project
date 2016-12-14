"use strict";
myApp.controller("DestinationsController", ["$scope", "DestinationService", function ($scope, DestinationService) {

    /* Get Destination List from Json File through Service */
    DestinationService.get().then(function (data) {
        $scope.destinations = data;
    });


}]);