const express = require("express")
const mongodb = require("mongodb")
const insert = express.Router()
// using POST method
insert.post("/", (req, res) => {

    console.log(req.body)
    const data = {
        "name": req.body.name,
        "roll_no": req.body.roll_no
    }
    mongodb.MongoClient.connect(process.env.CONNECTION_URL, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db(process.env.DATABASE_NAME)
            db.collection(process.env.COLLECTION_NAME).insertOne(data, (err, result) => {
                if (err) throw err;
                else {
                    res.send("data insert....");
                }
                // try {
                //     // db.collection(process.env.COLLECTION_NAME).insertMany([data]);
                // } catch (e) {
                //     console.log(e)
                //     // res.send("data insert....");
                // }
            })
        }
    })
})



// using GET method
// insert.get("/",(req,res)=>{
//     const data = {
//         p_id : "204",
//         p_name:"vivo",
//         p_price:30000
//     }
//     mongodb.MongoClient.connect(process.env.CONNECTION_URL,(err,connection)=>{
//         if(err) throw err;
//         else{
//             const db = connection.db(process.env.DATABASE_NAME)
//             db.collection(process.env.COLLECTION_NAME).insertOne(data,(err,result)=>{
//                 if(err) throw err;
//                 else{
//                     res.send("data insert....");
//                 }
//             })
//         }
//     })
// })
module.exports = insert