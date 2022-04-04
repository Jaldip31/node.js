//                   http://localhost:5555/student/register
//                   http://localhost:5555/coures/cform
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const studModel = require('./database/studModel')
const couresModel = require('./database/courseModel')

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

const { studentRouter, courseRouter } = require("./rout/rout")
app.use("/student", studentRouter);
app.use("/coures", courseRouter);


//mongoose connect
mongoose.connect("mongodb://localhost:27017/jaldip", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/find", (req, res) => {
    studModel.find(req.query).then(data => res.json(data))
})

app.post("/submit", (req, res) => {
    async function fun() {
        try {
            var queryObject = req.body
            var count = await studModel.count().then(data => data)
            console.log(count);

            if (count == 0) {
                queryObject.form_no = 1001
                console.log(queryObject.form_no);
            }
            else {
                var lastRecord = await studModel.find().select("form_no").sort({ _id: -1 }).limit(1);
                console.log(lastRecord);
                queryObject.form_no = lastRecord[0].form_no + 1
            }

            //data insert in database
            console.log(queryObject)
            var newUser = new studModel(queryObject);
            newUser.save().then(() => console.log("Document Inserted...")).catch(error => console.log(error))
        }
        catch (error) {
            console.log(error)
        }
    }
    fun()
    // res.send("done...")
    console.log("end...");
})

app.get("/findCourse", (req, res) => {
    couresModel.find(req.query).then(data => res.json(data))
})
app.post("/submitCourse", (req, res) => {
    async function fun() {
        try {
            var queryObject = req.body
            var count = await couresModel.count().then(data => data)
            console.log(count);

            if (count == 0) {
                queryObject.courseid = 101
                console.log(queryObject.courseid);
            }
            else {
                var lastRecord = await couresModel.find().select("courseid").sort({ _id: -1 }).limit(1);
                console.log(lastRecord);
                queryObject.courseid = lastRecord[0].courseid + 1
            }

            //data insert in database
            console.log(queryObject)
            var newUser = new couresModel(queryObject);
            newUser.save().then(() => console.log("Document Inserted...")).catch(error => console.log(error))
        }
        catch (error) {
            console.log(error)
        }
    }
    fun()
    // res.send("done...")
    console.log("end...");

})


port = process.env.PORT || 5555
app.listen(port, () => {
    console.log(`listing port ${port}`);
})