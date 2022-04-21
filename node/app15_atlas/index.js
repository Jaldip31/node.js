const express = require("express");
const app = express();
app.use(express.json);                   // MIME type

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

app.use("/get_product",insert)








const port = process.env.PORT || 6666
app.listen(port,()=>console.log(`server listing ${port}`))
