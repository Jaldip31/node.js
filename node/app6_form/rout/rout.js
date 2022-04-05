const express = require('express');
const studModel = require('../database/studModel')
const couresModel = require('../database/courseModel')

const studentRouter = express.Router();
studentRouter.get("/register", (req, res) => {
    res.sendFile(__dirname + "/studentForm.html");
})
studentRouter.get("/find", (req, res) => {
     studModel.find(req.query).then(data => res.json(data))
})

const courseRouter = express.Router();
courseRouter.get("/insert", (req, res) => {
    res.sendFile(__dirname + "/courseForm.html");
})
courseRouter.get("/find", (req, res) => {
    couresModel.find(req.query).then(data => res.json(data))
})

module.exports = { studentRouter, courseRouter }