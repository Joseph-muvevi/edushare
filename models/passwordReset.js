const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// the reset schema
const resetSchema = new Schema({
    name: {
        type: String,
        minlength: 9,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        minlength: 9,
        maxlength: 100,
        required: true
    },
    oldpassword: {
        type: String,
        minlength: 8,
        maxlength: 2000,
        required: true
    },
    newpassword: {
        type: String,
        minlength: 8,
        maxlength: 2000,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

// the reset model
const Reset = mongoose.model("reset", resetSchema)

// validating the message 
const validate = (message) => {
    const schema = Joi.object({
        name: Joi.string().min(9).max(100).required(),
        email: Joi.string().min(9).max(100).required(),
        oldpassword: Joi.string().min(8).max(100).required(),
        newpassword: Joi.string().min(8).max(100).required(),
    })

    return schema.validate(message)
}

module.exports.Reset = Reset
module.exports.validate = validate