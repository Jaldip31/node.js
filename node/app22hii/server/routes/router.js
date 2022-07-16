const express = require('express');
const connectDB = require('../database/connection')
const controller = require("../controller/controller")
const services = require("../services/render")
const auth = require("../middleware/auth")

const userRout = express.Router();
const courseRout = express.Router();

connectDB()

// services
userRout.get("/", services.index);
userRout.get("/register", services.register);
userRout.get("/login", services.login);
userRout.get("/secret", auth, services.secret);

courseRout.get("/addCourse", services.addCourse);
courseRout.get("/allCourse", services.allCourse);                   // ++++++
courseRout.get("/UPDATE_COURSE", services.updateCourse);             // ------

//API
userRout.post("/submitUser", controller.submitUser);
userRout.post("/submitLogin", controller.submitLogin);
userRout.get("/logout", controller.logout);

courseRout.get("/find_course", controller.find_course);                 // ++++++
courseRout.post("/insert_course", controller.insert_course);
courseRout.post("/update_course", controller.update_course);           // -------
courseRout.get("/DELETE_COURSE", controller.delete_course);           // -------

module.exports = { userRout, courseRout }