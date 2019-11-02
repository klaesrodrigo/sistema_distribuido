const axios = require('axios')
// const CoinModel = require('../model/CoinModel')
// const util = require('../helpers/util')

const baseURL = process.env.BC_BASE_URL
class CoinService {
  async getAndSaveCoins () {
    try {
      const data = await this.getCoins()

      for (const coin in data) {
        console.log(coin)
      }

      // const result = await new CoinModel().post(data)

      return data
    } catch (error) {
      console.log('Erro ao salvar moedas', error)
    }
  }
}

module.exports = CoinService
