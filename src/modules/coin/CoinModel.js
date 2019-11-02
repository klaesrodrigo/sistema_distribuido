const Model = require('./schema/CoinSchema')

class CoinModel {
  constructor () {
    this.Model = Model
  }

  async post (data) {
    const coin = await new Model(data).save()
    return coin
  }

  async get (code) {
    console.log('code', { code })

    // const coin = await new Model().findOne({ code })
    return true
  }
}

module.exports = CoinModel
