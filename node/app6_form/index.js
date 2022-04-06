//                   http://localhost:5555/student/register
//                   http://localhost:5555/course/insert
const express = require('express');
const app = express();
const bcryptjs=require("bcryptjs")
const mongoose = require('mongoose')
const studModel = require('./database/studModel')
const couresModel = require('./database/courseModel')

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

const { studentRouter, courseRouter } = require("./rout/rout")
app.use("/student", studentRouter);
app.use("/course", courseRouter);

//mongoose connect
mongoose.connect("mongodb://localhost:27017/jaldip", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function insert(model,queryObject,id_start_no) {
    try {
        var count = await model.count().then(data => data)
        // console.log(count);

        if (count == 0){
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

async function Securefee(fee,queryObject){
    const result = await bcryptjs.hash(fee,10);
    console.log(result)
    queryObject.fees=result
    
}

app.post("/submitStudent", (req, res) => {
    var queryObject = req.body
    insert(studModel,queryObject,1001)
})

app.post("/submitCourse", (req, res) => {
    var queryObject = req.body
    Securefee(queryObject.fees,queryObject)
    insert(couresModel,queryObject,101)
})
app.post("/findCourse", (req, res) => {
    console.log()
    couresModel.find(req.body).then(data => res.json(data))
})

port = process.env.PORT || 5555
app.listen(port, () => {
    console.log(`listing port ${port}`);
})

//fallback function
app.use("/",(req,res)=>res.send("NO PAGE"))