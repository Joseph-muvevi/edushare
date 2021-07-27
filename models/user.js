const Joi = require("joi")
const mongoose = require("mongoose")
const Schema = mongoose.Schema


// the user schema
const userSchema = new Schema({
    name : {
        type: String,
        minlength: 4,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        minlength: 9,
        maxlength: 100,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 2000,
        required: true
    }
})

// the model
const User = mongoose.model('user', userSchema)


// joi validation
const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(4).max(100).required(),
        email: Joi.string().min(9).max(100).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }),
        password: Joi.string().min(8).max(100).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    })

    return schema.validate(user)
}

module.exports.User = User
module.exports.validate = validate