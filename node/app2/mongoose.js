var mongoose = require ("mongoose");
var EmpSchema = new mongoose.Schema({_id:Number,eno:Number,ename:String,esal:String,eaddr:String},{versionkey:false});
var EmpModel = mongoose.model("employ","EmpSchema");

mongoose.connect("mongodb://localhost/Skillqode");
var newEmp = new EmpModel({_id:9,eno:108,ename:"rakesh",esal:5100,eaddr:"boroda"})

newEmp.save(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Document Inserted...");
    }
    mongoose.disconnect();
})