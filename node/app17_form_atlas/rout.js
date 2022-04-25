const express = require("express");
const app = express()

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const db = require("./db");

const studRouter = express.Router();
studRouter.get("/insert",(req,res)=>res.sendFile(__dirname+"/studentForm.html"))

studRouter.post("/submitStudent",(req,res)=>{
    db.student_insert(req.body)
    console.log(req.body)
})

studRouter.get("/find",(req,res)=>{
    db.student_find(res);
})


module.exports = studRouter;