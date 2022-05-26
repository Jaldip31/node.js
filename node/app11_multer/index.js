const express = require("express");
const app = express();
app.use(express.json())
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const mongoose = require("mongoose");
const imgModel = require("./model/model")

// mongoose.connect("mongodb://localhost:27017/myDB").then(console.log('connected'));
mongoose.connect("mongodb+srv://admin:admin@cluster0.agz16.mongodb.net/mydbbb?retryWrites=true&w=majority").then(console.log('connected'));

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        // Uploads is the Upload_folder_name
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})

const maxSize = 1 * 1000 * 1000;

var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {

        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);

        var extname = filetypes.test(path.extname(
            file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the "
            + "following filetypes - " + filetypes);
    }

    // mypic is the name of file attribute
}).array('imag', 3)




app.post('/', upload, (req, res, next) => {
    // app.post('/', upload.single('imag'), (req, res, next) => {

    // app.post('/', (req, res, next) => {
    console.log("req.body", req.body)
    // console.log("req.file", req.file)
    console.log("req.files", req.files)
    for (let i = 0; i < req.files.length; i++) {
        var obj = {
            name: req.body.name,
            desc: req.body.desc,
            imag: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files[i].filename)),
                contentType: 'image/png'
            }
        }
    }
    imgModel.create(obj).then(data => res.send(data)).catch(err => console.log(err))


});

const port = 5151
app.listen(port, (() => console.log(`listing port : ${port}`)));