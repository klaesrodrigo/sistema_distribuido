const CoinService = require('./CoinService')

class CoinController {
  async list (req, res) {
    const coinService = new CoinService()
    try {
      const coins = await coinService.list()
      res.send(coins)
    } catch (error) {
      res.send(error)
    }
  }

  async create (req, res) {
    const coinService = new CoinService()
    try {
      const coins = await coinService.create(req.body)
      res.send(coins)
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = CoinController
