const mongoose = require("mongoose");

const courseSchama = new mongoose.Schema({
    _id: { type: Number, required: true },
    coursename: { type: String, required: true },
    description: { type: String, required: false },
    duration: { type: Number, required: false },
    fees: { type: Number, required: false },
    prerequisite:{
        HSC:String,
        SSC:String,
        Bachaler:String
    }
}, { timestamps: true })

var couresModel = mongoose.model("courseDetail", courseSchama)

module.exports = couresModel



// lojhn; LockManager
