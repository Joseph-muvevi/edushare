const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require("joi")

// the order schema
const orderSchema = new Schema({
    userId: {
        type: String,
    },
    items: [{
        productId: {
            type: String,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// the order model
const Order = mongoose.model("order", orderSchema)

// validation
const validate = (order) => {
    const schema = Joi.object({
        userId : Joi.string(),
        items: Joi.array().min(4),
        bill: Joi.number().min(0).max(1000000).required()
    })


    return schema.validate(order)
}

// exports
module.exports.Order = Order
module.exports.validate = validate