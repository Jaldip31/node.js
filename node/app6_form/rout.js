const express = require('express');
const app = express();

const studentRouter = express.Router();
studentRouter.get("/register", (req, res) => {
    res.sendFile(__dirname + "/form.html");
})



module.exports = studentRouter