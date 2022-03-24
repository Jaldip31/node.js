var express = require("express");
var app =express();
app.listen(5559,()=>{
    console.log("listing port 5559");
});
app.get("/",(req,res)=>{
    console.log("req.url:",req.url)
    console.log("req.method:",req.method)
    console.log("req.header:",req.header)
    console.log("req.query:",req.query)
    console.log("req.body:",req.body)
    res.write("hellooooo");
});