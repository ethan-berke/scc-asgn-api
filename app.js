/**
 * app.js 
 * Entry point for asgn-api application
 * Project 3
 * Ethan Berke
 * COMP2150 Web Services
 */

let express = require('express');
let app = express();
const asgnRouter = require('.asgn-router');
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

//mongoose and body parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

//connect to mongoose
mongoose.connect("mongodb+srv://admin:admin@rest.eqe2a.mongodb.net/test", {useNewUrlParser: true});
var db = mongoose.connection;

if(!db) {
    console.log("Error connecting to the database.");
} else {
    console.log("Database connected");
}

var port = 3000;

app.use("/asgn-api", asgnRouter);

app.get('/', (req, res) => res.send('Welcome to Asgn-API!'));

app.listen(port, function () {
    console.log(`Runnning Asgn-API on port ` + port);
});