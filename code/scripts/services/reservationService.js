'use strict';
angular.module("travelApp").service("reservationService", ["$http", function($http) {
    
    this.reservationEntryObj = {
        resId: "",
        resStartDate: "",
        resEndDate: "",
        resFirstName: "",
        resLastName: "",
        resEmail: "",
        resGuestCount: "",
        resDestination: "",
    }
    
    this.addReservationEntry = addReservationEntry;
    var that = this;
    
    this.postReservationTable = function(dataParam) {
        return $http({
            method: "POST",
            url: "/service/reservation",
            data: dataParam
        }).then(function(result) {
            return result.status;
        });
    }
    
    function addReservationEntry() {
        var newReservationEntryObj = {
            resstartdate: that.reservationEntryObj.resStartDate,
            resenddate: that.reservationEntryObj.resEndDate,
            resfirstname: that.reservationEntryObj.resFirstName,
            reslastname: that.reservationEntryObj.resLastName,
            resemail: that.reservationEntryObj.resEmail,
            resguestcount: that.reservationEntryObj.resGuestCount,
            resdestination: that.reservationEntryObj.resDestination
        }
        alert("service-alert");
        return that.postReservationTable(newReservationEntryObj);
    }
    
}]);