const express = require("express")
const find = express.Router()
const mongodb = require("mongodb")
const skill = mongodb.MongoClient;

find.get("/",(req,res)=>{
    console.log("hello")
    skill.connect(process.env.CONNECTION_URL,(err,connection)=>{
        // console.log(process.env.CONNECTION_URL);
        if(err) throw err;
        else{
            const db = connection.db(process.env.DATABASE_NAME,{
                useNewurlPareser:true,
                useUnifiedTopology:true
            })
            // console.log(db)
            db.collection(process.env.COLLECTION_NAME).find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array)
                }
            })
        }
    })
})



module.exports = find