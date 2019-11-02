const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  warnings: Object
})

module.exports = mongoose.model('User', UserSchema)
