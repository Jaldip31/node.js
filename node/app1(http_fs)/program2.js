//copy file using readFile and writeFile

var fs = require("fs");

fs.readFile("node/app1(http_fs)/files/WriteFile.txt","utf-8",(error,data)=>{
    fs.writeFile("node/app1(http_fs)/files/program2.txt",data,"utf-8",(error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("writing file completed");
        }
        
    });
});

