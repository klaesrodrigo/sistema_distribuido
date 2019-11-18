const CoinModel = require('./CoinModel')
class CoinService {
  async create (data) {
    try {
      const coinModel = new CoinModel()
      for (const coin of data) {
        const hasCoin = await coinModel.get(coin.name)

        if (hasCoin) {
          await coinModel.update(hasCoin._id, coin)
        } else {
          await coinModel.post(coin)
        }
      }

      return data
    } catch (error) {
      console.log('Erro ao salvar moedas', error)
    }
  }

  async list () {
    try {
      const data = await new CoinModel().list()

      return data
    } catch (error) {
      console.log('Erro ao buscar moedas', error)
    }
  }
}

module.exports = CoinService
