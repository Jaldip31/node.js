const userModel = require("../model/model")

exports.signup = ((req, res) => userModel.insertMany(req.body))

exports.login = (async (req, res) => {
    const data = await userModel.find({ email: req.body.email }, {}).then(async data => {
        const signup_pass = data[0].password;
        const login_pass = req.body.password;

        if (signup_pass == login_pass) {
            const all_data = await userModel.find()
            const new_data = []
            all_data.forEach(element => (element.email != data[0].email) ? new_data.push(element) : 0);

            console.log(new_data)
            res.send(new_data);
        } else {
            res.json({ "msg": "login fail" });
        }
    }).catch(e => console.log(e));
})

exports.update = ((req, res) => {
    userModel.updateOne({ email: req.body.email }, {
        $set: {
            password: req.body.password
        }
    }).then(data => res.json({ "msg": "updated..." })).catch(e => console.log(e))
    res.send("hellooo");
})

exports.delete = ((req, res) => userModel.deleteOne(req.body).then(data => res.json({ "msg": "deleted..." })).catch(e => console.log(e)))