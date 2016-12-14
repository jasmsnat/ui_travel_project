var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();
var basePath = "/travel";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

app.listen(3000, function (req, res) {
    console.log("listening to port 3000 - ui_travel_project");
});


/* Database Connection */
app.use(connection(mysql, {
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "travel"
}, "request"));

// Post Service Object
var postTravelObj = {
    contactForm: {
        query: "INSERT into contact_form set ?",
        url: basePath + "/contactDetails",
        ids: []
    }
}

// For loop for postService
for (var key in postTravelObj) {
    postTravels(postTravelObj[key].url, postTravelObj[key].ids, postTravelObj[key].query);
}

// Post Service
function postTravels(url, ids, query) {
    app.post(url, function (req, res, next) {
        var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            var queryx = connection.query(query, reqObj, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error");
                }
                res.json(results);
            });
        });
    });
}

// Get Service Object
var getServiceObj = {
    person: {
        query: "SELECT * FROM contact_form",
        url: basePath + "/info",
        ids: []
    }
}

// For loop for getService
for (var key in getServiceObj) {
    getServices(getServiceObj[key].url, getServiceObj[key].ids, getServiceObj[key].query);
}

// Get Service
function getServices(url, ids, query) {
    app.get(url, function (req, res, next) {
        var id = req.params[ids];
        req.getConnection(function (err, connection) {
            if (err) return next(err);

            connection.query(query, id, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("Mysql error, check your query");
                }
                res.json(results);
            });
        });
    });
}