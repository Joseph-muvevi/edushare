const mongoose = require('mongoose')
const logger = require("./utils/logger")

module.exports = connection = async () => {
    try {
        const connectionParameters = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            autoIndex: true,
        }
        await mongoose.connect(process.env.DB, connectionParameters)
            console.log('Connected to the database...')
            logger.info("Connected to the database...")

    }
    catch (error) {
        console.log(error, 'Could not connect to the database')
        logger.error("Could not connect to the database")
    }
}