const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductSchema = new Schema({
  product_name: {
    type: String,
    required: true
  },

  product_type: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  size: {
    type: Array,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  images: {
    type: Array,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Product = mongoose.model('Product', ProductSchema);