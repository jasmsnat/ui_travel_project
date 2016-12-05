var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();
var basePath = "/service";

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
    user: "travelapptest",
    password: "test123",
    database: "travelapp"
}, "request"));

var getPostObj = {
    reservation: {
        url: basePath + "/reservation",
        ids: [],
        query: "INSERT INTO reservationform SET ?"
    },
    contact: {
        url: basePath + "/contact",
        ids: [],
        query: "INSERT INTO contactform SET ?"
    }
}

for (var key in getPostObj) {
    postService(getPostObj[key].url, getPostObj[key].ids, getPostObj[key].query);
}

function getService(url, ids, query) {
    app.get(url, function (req, res, next) {

    })
}

function postService(url, ids, query) {
    app.post(url, function (req, res, next) {
        var reqObj = req.body;
        req.getConnection(function (err, connection) {
            if (err) {
                return next(err);
            }
            connection.query(query, reqObj, function (err, results) {
                if (err) {
                    console.log(err);
                    return next("MySQL error, check POST query");
                }
                res.json(results);
            });
        });
    });
}
