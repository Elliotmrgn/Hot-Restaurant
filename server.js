var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

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
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("http://localhost:" + PORT);
  });