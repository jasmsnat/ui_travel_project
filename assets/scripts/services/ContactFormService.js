"use strict"
myApp.service("ContactFormService", ["$http", function ($http) {

    this.contactObj = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    }
    var parent = this;

    this.entryContactDetail = function () {
        var tempContactObj = {
            firstname: parent.contactObj.firstname,
            lastname: parent.contactObj.lastname,
            email: parent.contactObj.email,
            phone: parent.contactObj.phone,
            message: parent.contactObj.message,
        };
        return parent.postContactDetail(tempContactObj);
    }

    /* Post Data into Database*/
    this.postContactDetail = function (dataParam) {
        console.log(dataParam);
        return $http({
            method: "POST",
            url: "/travel/contactDetails",
            data: dataParam
        }).then(function (result) {
            return result.data;
        });
    };
}]);