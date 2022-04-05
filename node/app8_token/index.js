// localhost: 5454 / demo ? name = skill & pwd=qode
const express = require('express')
const app = express()

//middleware
const authorization = (req, res, next) => {
    const allheadre = req.headers;
    // console.log(allheadre)
    if (allheadre.token == "test") {
        next()
    } else {
        res.send({ "meassage": "unauthorized" })
    }
}
app.get("/demo", authorization, (req, res) => {
    if (req.query.name == "skill" && req.query.pwd == "qode") {
        res.send({
            "logic": "success"
        })
    } else {
        res.send({ "login": "fail" })
    }
})

app.listen(5151, () => {
    console.log("server is run 5151")
})