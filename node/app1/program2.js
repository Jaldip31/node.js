//copy file using readFile and writeFile

var fs = require("fs");

fs.readFile("WriteFile.txt","utf-8",(error,content)=>{
    fs.writeFile("WriteFileCopy.txt",content,"utf-8",(error)=>{
        
    });
});

