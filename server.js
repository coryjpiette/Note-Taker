
// Dependencies
const express = require("express");
const fs = require("fs");


//Express App
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));