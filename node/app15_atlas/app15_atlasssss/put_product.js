const express = require("express");
const mongodb = require("mongodb");
const skill = mongodb.MongoClient;

const update = express.Router()
update.put("/", (req, res) => {
    console.log("hell")
    console.log(req.body)
    skill.connect(process.env.CONNECTION_URL, (err, connection) => {
        console.log(process.env.CONNECTION_URL);
        if (err) throw err;
        else {
            const db = connection.db(process.env.DATABASE_NAME, {
                useNewurlPareser: true,
                useUnifiedTopology: true
            })
            // db.collection(process.env.COLLECTION_NAME).updateOne({ "p_id": req.body.p_id }, {
            db.collection(process.env.COLLECTION_NAME).updateMany({ "p_name": req.body.p_id }, {
                $set: {
                    "p_name": req.body.p_name,
                    "p_price": req.body.p_price
                }
            }, (err, result) => {
                if (err) throw err;
                else {
                    res.json({ "msg": "update data" });
                }

            });
        }
    });
});
module.exports = update