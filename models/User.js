const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  fName: {
    type: String,
    required: true
  },

  lName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: false
  },

  zipCode: {
    type: Number,
    required: false
  },

  city: {
    type: String,
    required: false
  },

  state: {
    type: String,
    required: false
  },

  phone: {
    type: Number,
    required: false
  },

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('User', UserSchema);
