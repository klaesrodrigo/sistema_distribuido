const CoinModel = require('./CoinModel')
const util = require('../../helpers/util')
class CoinService {
  async getAndSaveCoins () {
    try {
      const data = await util.getCoins()

      for (const coin of data) {
        console.log(coin)
        await new CoinModel().post(coin)
      }

      return data
    } catch (error) {
      console.log('Erro ao salvar moedas', error)
    }
  }
}

module.exports = CoinService
