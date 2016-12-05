"use strict"

myApp.controller('NavigationController', ['$scope', function ($scope) {
    $scope.mainNav = [{
        name: "Destination",
        link: "#",
        subtree: [{
            name: "Destination One",
            link: "destination1"
                }, {
            name: "Destination Two",
            link: "destination2"
                }]
            }, {
        name: "Trips",
        link: "#",
        subtree: [{
            name: "Trip One",
            link: "trip1"
                }, {
            name: "Trip Two",
            link: "trip2"
                }]
            }];
    }]);
