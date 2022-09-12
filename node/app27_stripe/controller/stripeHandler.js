const secretKey = 'sk_test_51LfzRRSGYuq6ROadXxDLOYDH5fIV3OC8UOYMPWTEWfcd1ASrmZIGVo0UQgUFnNwsdjCsShRkq3RDcHVPju5W3LPn00yZVtnHnP';

const stripe = require("stripe")(secretKey);

const createNewCustomer = async (req, res) => {
    try {
        const customer = await stripe.customers.create({
            name: req.body.name,
            email: req.body.email
        });
        console.log("====customer====", customer)
        res.status(200).send(customer);
    }
    catch (e) {
        throw new Error(e);
    }
}

const addNewCard = async (req, res) => {
    try {
        const card_token = await stripe.tokens.create({
            card: {
                name: req.body.name,
                number: req.body.number,
                exp_month: req.body.exp_month,
                exp_year: req.body.exp_year,
                cvc: req.body.cvc
            }
        });
        console.log("====card_token====", card_token)

        const card = await stripe.customers.createSource(req.body.customerId, {
            source: `${card_token.id}`
        })
        console.log("====card====", card)
        return res.status(200).send({ card: card.id })
    }
    catch (e) {
        throw new Error(e);
    }
}

const createCharges = async (req, res) => {
    try {
        const createCharge = await stripe.charges.create({
            receipt_email: "test@gmail.com",
            amount: 50 * 100,
            currency: "inr",
            card: req.body.cardId,
            customer: req.body.customerId

        });
        console.log("====createCharge====", createCharge)
        res.status(200).send(createCharge)
    }
    catch (e) {
        throw new Error(e);
    }
}


const payment = async (req, res) => {
    try {
        const paymentMethod = await stripe.paymentMethods.create({
            type: "card",
            card: {
                number: req.body.number,
                exp_month: req.body.exp_month,
                exp_year: req.body.exp_year,
                cvc: req.body.cvc
            }
        });
        console.log("====paymentMethod====", paymentMethod)

        paymentIntent = await stripe.paymentIntents.create({
            payment_method: paymentMethod.id,
            amount: 75 * 100,
            currency: "inr",
            confirm: true,
            payment_method_types: ["card"],
        })
        console.log("====paymentIntent====", paymentIntent)
        res.status(200).send(paymentIntent)
    }
    catch (e) {
        throw new Error(e);
    }
}

module.exports = {
    createNewCustomer,
    addNewCard,
    createCharges,
    payment
}