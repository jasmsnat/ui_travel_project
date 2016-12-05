'use strict';
angular.module("travelApp").service("contactService", ["$http", function($http) {
    
    this.contactEntryObj = {
        msgId: "",
        msgSubject: "",
        msgFirstName: "",
        msgLastName: "",
        msgEmail: "",
        msgContent: ""
    }
    
    this.addContactEntry = addContactEntry;
    var that = this;
    
    this.postContactTable = function(dataParam) {
        return $http({
            method: "POST",
            url: "/service/contact",
            data: dataParam
        }).then(function(result) {
            return result.status;
        });
    }
    
    function addContactEntry() {
        var newContactEntryObj = {
            msgsubject: that.contactEntryObj.msgSubject,
            msgfirstname: that.contactEntryObj.msgFirstName,
            msglastname: that.contactEntryObj.msgLastName,
            msgemail: that.contactEntryObj.msgEmail,
            msgcontent: that.contactEntryObj.msgContent
        }
        alert("contact-service")
        return that.postContactTable(newContactEntryObj);
    }
    
}]);