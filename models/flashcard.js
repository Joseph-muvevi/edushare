const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Joi = require("joi")

// creating the flashcard schema 
const flashcardSchema = new Schema({
    questions : {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
    },
    answers: {
        type : String,
        required: true,
        minlength: 100,
        maxlength: 2500
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

// creating the model 
const Flashcard = mongoose.model("flashcards", flashcardSchema)

// validating the schema 
const validate = (flashcard) => {
    const schema = Joi.object({
        questions: Joi.string().min(10).max(100).required(),
        answers: Joi.string().min(100).max(2500).required()
    })

    return schema.validate(flashcard)
}

// exports
module.exports.Flashcard = Flashcard
module.exports.validate = validate