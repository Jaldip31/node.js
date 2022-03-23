//1
var fs = require("fs");
var content = "we are again fine... ";

fs.writeFileSync("WriteFileSync.txt", content, "utf-8");



//2
// var fs =require("fs");
// var content = "we are again fine... ";
// fs.writeFileSync("WriteFileSync.txt",content,"utf-8",function(error){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("writing file completed");
//     }
// })