const Model = require('./schema/CoinSchema')

class CoinModel {
  async post (data) {
    const coin = await new Model(data).save()
    return coin
  }

  async get (name) {
    const coin = await Model.findOne({ name })
    return coin
  }

  async list (code) {
    const coins = await Model.find()
    return coins
  }

  async update (id, data) {
    const coin = await Model.where({ _id: id }).update(data)
    return coin
  }
}

module.exports = CoinModel
