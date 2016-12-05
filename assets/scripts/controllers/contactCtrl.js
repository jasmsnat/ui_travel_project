'use strict';
angular.module("travelApp").controller("contactCtrl", ["$scope", "contactService", function($scope, contactService) {
    
    $scope.contactEntryModel = {
        msgId: "",
        msgSubject: "",
        msgFirstName: "",
        msgLastName: "",
        msgEmail: "",
        msgContent: ""
    };
    
    contactService.contactEntryObj = $scope.contactEntryModel;
    $scope.contactEntryArray = [];
    
    $scope.resetContactEntryModel = {};
    function resetContact() {
        $scope.contactEntryModel = angular.copy($scope.resetContactEntryModel);
        contactService.contactEntryObj = $scope.contactEntryModel;
    };
    
    $scope.contactEntryFunctions = {
        addContact: function() {
            alert("contact-controller");
            contactService.addContactEntry().then(function() {
                resetContact();
            });
        }
    };
    
}]);