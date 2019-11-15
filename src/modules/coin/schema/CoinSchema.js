const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CoinSchema = new Schema({
  name: String,
  code: String,
  value: {
    buy: Number,
    sale: Number
  }
})

module.exports = mongoose.model('Coin', CoinSchema)
