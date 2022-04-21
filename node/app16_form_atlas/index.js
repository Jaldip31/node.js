const express = require("express")
const app = express()
// app.use(express.json())

const cors = require("cors")
app.use(cors())

const dotenv = require("dotenv")
dotenv.config()

// const insert = require("./insert")
// app.use("/insert_student",insert)


//                   http://localhost:5555/student/find
//                   http://localhost:5555/course/insert

const bcryptjs = require("bcryptjs")

//databasesz
const studModel1 = require('./database/studModel')
// const couresModel = require('./database/courseModel')

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));


const { studentRouter, courseRouter } = require("./rout/rout")
app.use("/student", studentRouter);
// app.use("/course", courseRouter);

async function ins(model, queryObject, id_start_no) {
    try {
        var count = await model.count().then(data => data)

        if (count == 0) {
            queryObject._id = id_start_no
        }
        else {
            var lastRecord = await model.find().select("_id").sort({ _id: -1 }).limit(1);
            queryObject._id = lastRecord[0]._id + 1
        }
        //data insert in database
        console.log(queryObject)
        model.insertMany(queryObject)
    }
    catch (error) {
        console.log(error)
    }
}

app.post("/submitStudent", (req, res) => {
    console.log(req.body)
    studModel1.insertMany(req.body) 
    
})

// app.post("/submitCourse/", async (req, res) => {
//     req.body.fees = await bcryptjs.hash(req.body.fees, 10);
//     ins(couresModel, req.body, 101)
// })

app.post("/findCourse", async(req, res) => await couresModel.find({ coursename: req.body.value }).then(data => res.json(data)))

// listing port 
port = process.env.PORT || 5555
app.listen(port, () => console.log(`listing port ${port}`))

//fallback function
app.use("/", (req, res) => res.send("NO PAGE"))