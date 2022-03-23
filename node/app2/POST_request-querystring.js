const http = require("http");
const querystring = require("querystring");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    if(req.method=="POST"){
        var postparameters ="";
        req.on("data",function(){
            postparameters+=data;
        })
        req.on("end",function(){
            var postdata =querystring.parse(postparameters);
            if(postdata["uname"]=="a" && postdata["upwd"]=="b"){
                res.write("<h1>Login Success</h1>")
            }else{
                res.write("<h1>Login Fail</h1>")
            }
            console.log("postparameter:",postparameters);
            res.end();
            


            
        })
    }
})

server.listen(5999,()=>{
    console.log("listing port 5999");
})