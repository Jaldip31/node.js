const http = require("http");
const querystring = require("querystring");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    if (req.method == "POST") {
        var postparameters = "";
        req.on('data', function () {
            postparameters += data;
        });
        
        req.on("end", function () {
            console.log("postparameter:", postparameters);
            var postdata = querystring.parse(postparameters);
            console.log("postparameter:", postdata);
            if (postdata["uname"] == "a" && postdata["upwd"] == "b") {
                res.write("<h1>Login Success</h1>")
            } else {
                res.write("<h1>Login Fail</h1>")
            }
            console.log("hello");
            res.end();
        })
    }
})

server.listen(5050, () => {
    console.log("listing port 5050");
})