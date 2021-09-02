const jwt = require("jsonwebtoken")
const config = require("config")
const logger = require("../utils/logger")

const auth = (req, res, next) => {
    const token = request.header("x-auth-token")
    if (!token) res.status(401).send("No token , Access denied")

    try {
        const decoded = jwt.decode(token, config.get("jwtPrivateKey"))
        req.user = decoded
        next()
    } 
    catch (err) {
        res.status(400).json({ msg:'Token is not valid'})
    }
}

module.exports.auth = auth