const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Joi = require("joi")

// creating cart schema
const itemSchema = new Schema({
    userId : {
        type: String
    },
    items: [{
        productId: {
            type: String,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
})

// the model
const Item = mongoose.model("item", itemSchema)

// validating the items
const validate = (item) => {
    const schema = Joi.object({
        userId: Joi.string(),
        items: Joi.array().min(1).max(700).required(),
        bill: Joi.number().required().min(0).max(1000000)
    })

    return schema.validate(item)
}

module.exports.Item = Item 
module.exports.validate = validate