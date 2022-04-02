//http://localhost:8000/student/register
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const studModel = require('./studModel')
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

const studentRouter = require("./rout")
app.use("/student", studentRouter);

mongoose.connect("mongodb://localhost:27017/dataaaaaa", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.post("/submit", (req, res) => {

    const queryObject = req.body
    console.log(queryObject)

    var newUser = new studModel(queryObject);
    newUser.save().then(() => console.log("Document Inserted...")).catch(error => console.log(error))

})

app.listen(8000, () => {
    console.log("listing port 8000");
})

