const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const dotenv = require("dotenv");

// const path = require("path");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

//route import
const student = require("./routes/studentRoutes");

app.use("/api/v1", student);


module.exports = app;