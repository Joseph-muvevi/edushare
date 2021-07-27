const mongoose = require('mongoose')

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
    }
    catch (error) {
        console.log(error, 'Could not connect to the database')
    }
}