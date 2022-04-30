const mongoose = require("mongoose")

const userdata = new mongoose.Schema({
    email:String,
    password:String
})

const userModel = new mongoose.model("userdata",userdata);

module.exports = userModel