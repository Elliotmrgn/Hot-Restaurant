var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation  = [
    {
        name: "John Doe",
        phoneNumber: "9195555555",
        email:"test@test.com",
        id:"1"
    }
]

const waitlist = [
    {
        name: "Jane Smith",
        phoneNumber: "9196666666",
        email:"wait@wait.com",
        id:"2"
    } 
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/waitinglist", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "waitingList.html"));
  });

// Displays JSON of reservations
app.get("/api/reservation", function(req, res) {
    return res.json(reservation);
});
 
// Displays JSON of waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

//Creates a new reservation
app.post("/api/reservation", (req, res) => {

    const newReservation = req.body;

    console.log(newReservation);

    reservation.push(newReservation);

    res.json(newReservation);

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("http://localhost:" + PORT);
});