const express = require("express");
const app = express();
const mysql = require("mysql")

//mySQl connect
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "skilldb"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
})

const register = express.Router();
register.post("/insert", (req, res) => {
    var sql = `INSERT INTO userdata (firstname, lastname,contact,email,password,configpass) VALUES ("${req.body.firstname}","${req.body.lastname}","${req.body.contact}","${req.body.email}","${req.body.password}","${req.body.configpass}")`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    res.json(req.body);
})

register.get("/find", (req, res) => {
    // var sql = `SELECT * from userdata`
    var sql = 'SELECT `firstname`, `contact`, `email`, `password`,  FROM `userdata`'
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result)
    });
    
})

register.put("/update", (req, res) => {
    res.send("hellooo");
})
 
register.delete("/delete", (req, res) => {
    res.send("hellooo");
})

module.exports = register;



// {
//     "firstname":"Jaldip",
//     "lastname":"Bhalani",
//     "contact":"1234567890",
//     "email":"jaldipgmail.com",
//     "password":"123456",
//     "configpass":"123456"
// }