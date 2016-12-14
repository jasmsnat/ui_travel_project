"use strict"
myApp.controller("ContactFormController", ["$scope", "ContactFormService", function ($scope, ContactFormService) {

    $scope.contactModule = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    }

    $scope.resetContactModule = {};

    function reset() {
        $scope.empModel = angular.copy($scope.resetContactModule);
        ContactFormService.empObj = $scope.empModel;
    }
    ContactFormService.contactObj = $scope.contactModule;

    $scope.clickObj = {
        contactDetail: function () {
            ContactFormService.entryContactDetail().then(function () {
                reset();
            });
        }
    }
}]);