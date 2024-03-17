var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  name: { type: String},
  email: {type: String},
  contact: { type: String},
  address: { type: String},
  city: { type: String},
  postalCode: { type: String},
})

module.exports = mongoose.model('users', userSchema)
