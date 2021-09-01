const mongoose = require("mongoose")
const Joi = require("Joi")
const Schema = mongoose.Schema

// the authorsschema
const authorSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    lastname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    experience: {
        type: Number,
        required: true,
        min: 1,
        max: 80,
    },
    courses: {
        type: Array,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    location: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

// the model
const Author = mongoose.model("author", authorSchema)

// joi validation 
const validate = (author) => {
    const schema = Joi.object({
        firstname: Joi.string().required().min(5).max(100),
        lastname: Joi.string().required().min(5).max(100),
        experience: Joi.number().required().min(1).max(80),
        location: Joi.string().required().min(5).max(100),
        email: Joi.string().required().min(5).max(100).email({minDomainSegments: 2, tlds : { allow : ['com', 'net', 'org'] }}),
        password: Joi.string().required().min(5).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
    return schema.validate(author)
}

// exports
module.exports.Author = Author