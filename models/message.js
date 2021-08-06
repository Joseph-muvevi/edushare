const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// the message schema
const messageSchema = new Schema({
    title: {
        type: String,
        minlength: 10,
        maxlength: 100
    },
    text : {
        type: String,
        minlength: 20,
        maxlength : 1000,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

// the message model
const Message = mongoose.model("message", messageSchema)

// validating the message 
const validate = (message) => {
    const schema = Joi.object({
        title: Joi.string().min(10).max(100),
        text: Joi.string().min(20).max(1000).required()
    })

    return schema.validate(message)
}

module.exports.Message = Message
module.exports.validate = validate