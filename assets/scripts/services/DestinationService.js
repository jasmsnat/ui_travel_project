"use strict"
myApp.service("DestinationService", ["$http", function ($http) {
    return {
        get: function () {
            return $http.get('/api/destinations.json').then(function (response) {
                return response.data;
            });
        }
    };
}])