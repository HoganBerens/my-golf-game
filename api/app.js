var express = require("express");

const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
var mongoose = require("mongoose");
const Router = require("./routes");

var app = express();
var cors = require("cors");
app.use(cors());

app.use(express.json());

const username = "hoganberens";
const password = "bGNPaN7Ss7NvLArl";
const cluster = "cluster0.q8zjjd1";
const dbname = "my-golf-game";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => console.log("Server is running at port 3000"));

module.exports = app;
