const express = require("express");
const app = express();
const nodemailer = require("nodemailer")
const sendgridtransport = require("nodemailer-sendgrid-transport")


const transporter = nodemailer.createTransport(sendgridtransport({
    auth:{
        // api_key:"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"
        api_key:"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"
    }

}))
app.use(express.json());
//app.use(cors());

app.get("/test", (req, res) => {
    res.send("hello...")
    console.log("hiii")
    transporter.sendMail({
        to:"jaldipbhalani@gmail.com",
        from:"snapillyindia@gmail.com",
        subject:"hello",
        html:"<h1>rano rana ni rite</h1>"
    })
    console.log("end")
})

//assign the port number
app.listen(5151, () => {
    console.log("listing port is 5151");
});