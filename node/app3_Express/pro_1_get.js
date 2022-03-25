const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.sendFile(__dirname+"/pro_1_form.html");
});

app.get("/login",(req, res) => {
    var uname = req.query.uname
    console.log(queryObject);
    const uname = queryObject.uname;
    const upwd = queryObject.upwd;
    uname === "skill" && upwd === "qode" ? res.write("<h1>Login Success</h1>") : res.write("<h1>Login Fail</h1>");
    res.end();
});
app.listen(5454, () => {
    console.log("server listening the port no. 5454");
});