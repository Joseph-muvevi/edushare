const Joi = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require("jsonwebtoken")
const config = require('config')

// the admin schema
const adminSchema = new Schema({
    firstname : {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    lastname : {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    username : {
        type: String,
        unique: true,
        required: true,
        minlength: 4,
        maxlength: 100
    },
    city: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 30
    },
    country: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
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

// adminshema methods
adminSchema.methods.generateAdminToken = function(){
    const token = jwt.sign({_id: this._id}, config.get("jwtPrivateKey"))
    return token
}

// the model
const Admin = mongoose.model('admin', adminSchema)


// validating the input
const validateAdmin = (admin) => {
    const adminSchema = Joi.object({
        firstname: Joi.string().required().min(5).max(100),
        lastname: Joi.string().required().min(5).max(100),
        username: Joi.string().required().min(5).max(100),
        city: Joi.string().required().min(4).max(30),
        country: Joi.string().required().min(4).max(30),
        email: Joi.string().required().min(5).max(100).email({minDomainSegments: 2, tlds : { allow : ['com', 'net', 'org'] }}),
        password: Joi.string().required().min(5).max(100).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })

    return adminSchema.validate(admin)
}

// exports
module.exports.Admin = Admin
module.exports.validate = validateAdmin