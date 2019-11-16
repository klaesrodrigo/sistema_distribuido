const CoinService = require('./CoinService')

class CoinController {
  async getAndSaveCoins (req, res) {
    const coinService = new CoinService()
    try {
      const coins = await coinService.getAndSaveCoins()
      res.send(coins)
    } catch (error) {
      res.send(error)
    }
  }

  async list (req, res) {
    const coinService = new CoinService()
    try {
      const coins = await coinService.list()
      res.send(coins)
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = CoinController
