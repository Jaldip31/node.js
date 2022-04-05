const mongoose = require("mongoose");

const courseSchama = new mongoose.Schema({
    courseid: { type: Number, required: true },
    coursename: { type: String, required: true },
    description: { type: String, required: false },
    duration: { type: Number, required: false },
    fees: { type: Number, required: false },
    // prerequisite:[
    //     tenth:{
    //         type:Boolean
    //     }
    // ]
}, { timestamps: true })

var couresModel = mongoose.model("courseDetail", courseSchama)

module.exports = couresModel

lojhn; LockManager