const Joi = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


// creating the schema
const tokenSchema = new Schema({
    token : {
        type: String,
        minlength: 10,
        maxlength: 10000
    }
})

// the model
const Token = mongoose.model('token', tokenSchema)

// exports
exports.Token = Token