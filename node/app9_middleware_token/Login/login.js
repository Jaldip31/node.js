const express = require("express");
const jwt = require("jwt-simple");
const LoginbModule = express.Router()

const tokenObj = require("../Token/token")

LoginbModule.post("/", (req, res) => {

    console.log(req.body)
    const uname = req.body.uname
    const upwd = req.body.upwd
    if (uname == "skill" && upwd == "qode") {
        const token = jwt.encode({ "uname": uname, "upwd": upwd }, "admin@123")
        tokenObj.token = token
        console.log(tokenObj.token)
        res.json({ "message": "Login success", "token": token });
    } else {
        res.json({ "message": "Login file" });
    }
})

module.exports = LoginbModule; 