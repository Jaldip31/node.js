//mongodb+srv://jaldip31:<password>@cluster0.swwad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb+srv://jaldip31:admin@cluster0.swwad.mongodb.net/mydata?retryWrites=true&w=majority", (err, client) => {
    if (err) throw err

    const db = client.db('mydata')

    exports.student_insert = (data) => {
        db.collection('studDetail').insertOne(data, (err, result) => {
            if (err) throw err
            console.log("inserted....");
        })
    }
    exports.student_find = (res) => {
        db.collection('studDetail').find().toArray((err, result) => {
            if (err) throw err
            res.json(result);
        })
    }
})