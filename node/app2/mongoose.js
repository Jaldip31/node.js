var mongoose = require ("mongoose");
var EmpSchema = new mongoose.Schema({_id:Number,eno:Number,ename:String,esal:String,eaddr:String});
var EmpModel = mongoose.model("employ",EmpSchema);

mongoose.connect("mongodb://localhost/Skillqode");
var newEmp = new EmpModel({eno:408,ename:"rakesh",esal:5100,eaddr:"boroda"})
var newEmp = new EmpModel({eno:08,ename:"rakesh",esal:5100,eaddr:"boroda"})
var newEmp = new EmpModel({eno:108,ename:"rakesh",esal:5100,eaddr:"boroda"})


newEmp.save(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("Document Inserted...");
    }
    mongoose.disconnect();
})
// mongoose.pluralize(null);