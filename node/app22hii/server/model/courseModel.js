const mongoose = require("mongoose");

const courseSchama = new mongoose.Schema({
    // _id: { type: Number, required: true },
    coursename: { type: String, required: true },
    description: { type: String, required: false },
    duration: {
        type: Number,
        required: false,
        validate(value) {
            if (value < 0) throw new Error("time is not negative");
        }
    },
    fees: { type: String, required: false },
    isActive: { type: Boolean, default: true }
    // prerequisite: {
    //     hsc: { type: Boolean, default: false },
    //     ssc: { type: Boolean, default: false },
    //     bachelor: { type: Boolean, default: false }
    // }
})

var couresModel = mongoose.model("courseDetail", courseSchama)

module.exports = couresModel



// lojhn; LockManager
