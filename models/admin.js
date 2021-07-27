const Joi = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// the admin schema
const adminSchema = new Schema({
    fName : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    lName : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    username : {
        type: String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    location: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
        
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
    }
})

// the model
const Admin = mongoose.model('admin', adminSchema)

// validating the input
const validateAdmin = (admin) => {
    const adminSchema = Joi.object({
        fName: Joi.string().required().min(5).max(100),
        lName: Joi.string().required().min(5).max(100),
        username: Joi.string().required().min(5).max(100),
        location: Joi.string().required().min(5).max(100),
        email: Joi.string().required().min(5).max(100).email({minDomainSegments: 2, tlds : { allow : ['com', 'net', 'org'] }}),
        password: Joi.string().required().min(5).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })

    return adminSchema.validate(admin)
}

// exports
module.exports.Admin = Admin
module.exports.validate = validateAdmin