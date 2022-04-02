const mongoose = require("mongoose");

const studSchama = new mongoose.Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    date: { type: Number, require: true },
    Formno: { type: Number, require: true },
    dob: { type: Number, require: true },
    qualification: { type: String, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
    courses: { type: String, require: true },
    reference: { type: String, require: true },
    inquiry_for: { type: String, require: true },
    notes: { type: String, require: true },
})

var studModel = mongoose.model("inqui", studSchama)

module.exports = studModel