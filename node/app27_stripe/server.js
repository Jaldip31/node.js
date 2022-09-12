const express = require("express");
const app = express();
app.use(express.json())

// var router = express.Router();
const stripeHandler = require("./controller/stripeHandler");

app.post("/create-customer", stripeHandler.createNewCustomer);
app.post("/add-card", stripeHandler.addNewCard);
app.post("/create-charges", stripeHandler.createCharges);
app.post("/payment", stripeHandler.payment);

app.listen(5000, () => console.log('server running...'))