const mongoose = require("mongoose")
const Joi = require("Joi")
const Schema = mongoose.Schema

// creating the document schema
const documentSchema = new Schema({
    upLoadFor : {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100
    },
    school: {
        type: String,
        minlength: 5,
        maxlength: 100
    },
    docType: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true
    }, 
    level: {
        type: String,
        minlength: 5,
        maxlength: 100
    },
    docCategory : {
        type: String,
        minlength: 5,
        maxlength: 100
    },
    profName: {        
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
    },
    yearWritten: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100,
    },
    docTitle: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
    },
    docInfo: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 1500
    },
    docFiles: {
        type: Array,
        required: true,
        min: 1,
        max: 10
    },
    docTags : {
        type: Array,
        min: 1,
        max: 10,
        required: true
    },
    docPrice: {
        type: Number,
        min: 0,
        max: 10000
    },
    termsAndCondition: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

// wrapping the schema to a model
const Document = mongoose.model("Document", documentSchema)

// validating the inputs
const validate = (document) => {
    const schema = Joi.object({
        upLoadFor: Joi.string().min(5).max(100).required(),
        school: Joi.string().min(5).max(100),
        docType: Joi.string().min(5).max(100).required(),
        level: Joi.string().min(5).max(100),
        docCategory: Joi.string().min(5).max(100),
        profName: Joi.string().min(5).max(100).required(),
        yearWritten: Joi.string().min(4).max(100).required(),
        docTitle: Joi.string().min(5).max(100).required(),
        docInfo: Joi.string().min(50).max(1500).required(),
        docFiles: Joi.array().min(1).max(10).required(),
        docTags: Joi.array().min(1).max(10).required(),
        docPrice: Joi.number().min(0).max(10000),
        termsAndCondition: Joi.boolean().required(),
    })

    return schema.validate(document)
}

// exports
exports.validate = validate
exports.Document = Document