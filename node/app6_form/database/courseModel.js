const mongoose = require("mongoose");

const courseSchama = new mongoose.Schema({
    _id: { type: Number, required: true },
    coursename: { type: String, required: true },
    description: { type: String, required: false },
    duration: { type: Number, required: false },
    fees: { type: String, required: false },
    prerequisite:{
        hsc:Boolean,
        ssc:Boolean,
        bachelor:Boolean
    }
}, { timestamps: true })

var couresModel = mongoose.model("courseDetail", courseSchama)

module.exports = couresModel



// lojhn; LockManager
