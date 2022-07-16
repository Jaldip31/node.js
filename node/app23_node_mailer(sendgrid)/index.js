const express = require("express");
const app = express();
const nodemailer = require("nodemailer")
const sendgridtransport = require("nodemailer-sendgrid-transport")


const transporter = nodemailer.createTransport(sendgridtransport({
    auth:{
        api_key:"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" 
    }

}))
app.use(express.json());
//app.use(cors());

app.get("/test", (req, res) => {
    res.send("hello...")
    console.log("hiii")

    var a =""
    for(var i=0;i<1;i++){
        
           a += transporter.sendMail({
            to:"mahesh.micrasolution@gmail.com",
            from:"lipsajj@gmail.com",
            subject:"CodeCookies InfoTech",
            // html:"<h1>kaam karo vatu nai</h1>",
            html:`<h1>Job Requirements</h1><br>
<h3>Applying for : web Developer(React/Angular)</h3>
<h3>Salary : 30000/month</h3>
<h3>experiences : 0-1 year</h3>
For more details <a href="https://tenor.com/view/majak-mazak-kapil-sharma-gulati-mashur-gif-18364167">click here</a>`,
            
        })
    }
    console.log("end")
    return a
})

//assign the port number
app.listen(5252, () => {    
    console.log("listing port is 5252");
});
