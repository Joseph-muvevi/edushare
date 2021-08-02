const logger = require("../utils/logger")

// capturing 500 errors
const serverError = (err, req, res, next) => {
    res.status(500).send("Something went wrong in the server")
    logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
    next()
}

// capturing 404 errors
const notFoundErrors = (err, req, res, next) => {
    res.status(404).send("Item/Page not found")
    logger.error(`400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    next()
}

module.exports = serverError
module.exports = notFoundErrors