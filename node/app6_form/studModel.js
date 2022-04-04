const mongoose = require("mongoose");

const studSchama = new mongoose.Schema({
    form_no:{type:Number,required: true},
    fname: { type: String, required: true },
    lname: { type: String, required: false },
    date: { type: Date},
    form_no: { type: Number, required: false },
    contact_no: { type: Number, required: false },
    dob: { type: Date,required: false},
    qualification: { type: String, required: false },
    email: { type: String, required: false },
    address: { type: String, required: false },
    courses: { type: String, required: false },
    reference: { type: String, required: false },
    inquiry_for: { type: String, required: false },
    notes: { type: String, required: false },
},{timestamps:true})

var studModel = mongoose.model("studDetail", studSchama)

module.exports = studModel