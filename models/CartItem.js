const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    product_id: {
        type: String,
        required: true
    },

    product_name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    user_id: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    size: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = CartItem = mongoose.model('CartItem', CartItemSchema);