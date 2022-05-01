const userModel = require("../model/model")

exports.signup = (async (req, res) => {
    // await userModel.insertMany(req.body).then(data=>res.send(data)).catch(e=>res.send(e))
    // await userModel.insertOne(req.body).then(data=>res.send(data)).catch(e=>res.send(e))
    console.log(req.body.ref)
    if (req.body.ref == undefined) {
        console.log("hii")
        // await userModel.insertOne(req.body).then(data=>res.send(data)).catch(e=>res.send(e))
    } else {
        await userModel.find({ email: req.body.ref }, {}).then(async ref_data => {
            // console.log(ref_data[0].email)
            if (ref_data == "") {
                res.json({ "msg": "please enter a vaild reference" })
            } else {
                console.log(ref_data);
                const my_salary = ref_data[0].salary.total_salary
                // const my_salary = 1000
                const my_bonus = ref_data[0].salary.total_salary * 0.07

                await userModel.updateOne({ email: ref_data[0].email }, {
                    $set: {
                        salary: { bonus: my_bonus , total_salary: my_salary + my_bonus }
                    }
                }).then(data => res.send(data)).catch(e => console.log(e));
            }
        }).catch(e => console.log(e));
    }

})

exports.login = (async (req, res) => {
    await userModel.find({ email: req.body.email }, {}).then(async data => {
        console.log(data);
        if (data == "") {
            res.json({ "msg": "do sign-up" })
        } else {
            // console.log(data)
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
        }
    }).catch(e => console.log(e));
})

exports.update = ((req, res) => {
    userModel.updateOne({ email: req.body.email }, {
        $set: {
            // password: req.body.password
            total_salary: req.body.total_salary
        }
    }).then(data => (data.modifiedCount == 0) ? res.json({ "msg": "not modified" }) : res.json({ "msg": "updated..." })).catch(e => console.log(e))
})

exports.delete = ((req, res) => userModel.deleteOne(req.body).then(data => (data.deletedCount == 0) ? res.json({ "msg": "not deleted" }) : res.json({ "msg": "deleted..." })).catch(e => console.log(e)))