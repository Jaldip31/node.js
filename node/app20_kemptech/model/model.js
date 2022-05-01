const mongoose = require("mongoose")

const userdata = new mongoose.Schema({
    email:{type: String, required:true},
    password:{type: String, required:true},
    ref:{type: String, required:false},
    salary:{
        bonus:{type: Object, default:0},
        total_salary:{type: Number, required:true}
    }
})

const userModel = new mongoose.model("userdata",userdata);

module.exports = userModel