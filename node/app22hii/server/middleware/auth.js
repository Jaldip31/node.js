const jwt = require("jsonwebtoken")

const middelware = async (req, res, next) => {
    try {

        const token = req.cookies.jwt
        const verify = await jwt.verify(token, "mySecretKey")
        console.log("verify", verify)

        next();
    }
    catch (error) {
        res.status(400).json({ "msg": `do login ERROR : up${error}` });
    }
}
module.exports = middelware