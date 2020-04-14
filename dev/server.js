var express = require("express")
var path = require("path")

var app = express();
var PORT = process.env.PORT || 1500;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var currentReservations = [
    {
        name: "Mark",
        phone: "1232538493",
        email: "mark@yahoo.com",
        uniqueID: "m1"
    },
    {
        name: "Trish",
        phone: "1232538493",
        email: "mark@yahoo.com",
        uniqueID: "m1"
    },

]

var waitList = [
    {
        name: "Carlos",
        phone: "1232538493",
        email: "mark@yahoo.com",
        uniqueID: "m1"
    }

]

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
})

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
    
})

app.get("/api/tables", function (req, res) {
    return res.json(currentReservations);

})

app.get("/api/waitlist", function (req, res) {




    return res.json(waitList);

})

app.listen(PORT, function(){
    console.log("listening on localhost:" + PORT)

})
