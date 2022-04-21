const express = require("express");
const mongodb = require("mongodb");
const skill = mongodb.MongoClient;

const dele = express.Router()
dele.delete("/", (req, res) => {
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
            db.collection(process.env.COLLECTION_NAME).deleteOne({ "p_id": req.body.p_id }, (err, result) => {
                // db.collection(process.env.COLLECTION_NAME).deleteMany({ "p_id": req.body.p_id }, (err, result) => {
                if (err) throw err;
                else {
                    res.json({ "msg": "delete data" });
                }

            });
        }
    });
});
module.exports = dele