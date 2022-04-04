const express = require('express');

const studentRouter = express.Router();
studentRouter.get("/register", (req, res) => {
    res.sendFile(__dirname + "/studentForm.html");
})

const courseRouter = express.Router();
courseRouter.get("/cform", (req, res) => {
    res.sendFile(__dirname + "/courseForm.html");
})

module.exports = { studentRouter, courseRouter }