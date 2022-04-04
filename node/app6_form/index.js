//                   http://localhost:5555/student/register
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const fs = require('fs')
const studModel = require('./studModel')
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

const studentRouter = require("./rout")
app.use("/student", studentRouter);

const formFile = fs.readFileSync("form.html", "utf-8");


//mongoose connect
mongoose.connect("mongodb://localhost:27017/jaldip", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post("/submit", (req, res) => {
    async function fun(){
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

                var replaceFormNo = formFile.replace("{%form_number%}", queryObject.form_no )
                res.write(replaceFormNo);

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


port = process.env.PORT || 5555
app.listen(port, () => {
    console.log(`listing port ${port}`);
})