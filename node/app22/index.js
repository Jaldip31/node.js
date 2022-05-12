const express = require('express');
const app = express();

//body-parser
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//view engine
const hbs = require("hbs");
app.set("view engine", "hbs")

const cookieParser = require("cookie-Parser");
app.use(cookieParser());

//router
const rout = require("./server/routes/router")
app.use("/", rout);

// listing port 
port = process.env.PORT || 5555
app.listen(port, () => console.log(`listing port ${port}`))

//fallback function
app.use("/", (req, res) => res.send("NO PAGE"))