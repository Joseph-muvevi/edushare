const mongoose = require("mongoose")
const Joi = require("joi")
const Schema = mongoose.Schema

// creating the schema 
const reviewSchema = new Schema({
    rating: {
        type: Number, 
        min: 1,
        max: 5,
        required: true
    }, 
    reviewContent: {
        type: String,
        minlength: 20,
        maxlength: 1000,
        required: true
    },
    date : {
        type : Date,
        default: Date.now
    }
}, {
    timestamps: true
})

// the model
const Review = mongoose.model("reviews", reviewSchema)

// validating the reviews
const validate = (review) => {
    const schema = Joi.object({
        rating: Joi.number().min(1).max(5).required(),
        reviewContent: Joi.string().min(20).max(1000).required()
    })

    return schema.validate(review)
}

module.exports.reviewSchema = reviewSchema
module.exports.validate = validate
module.exports.Review = Review