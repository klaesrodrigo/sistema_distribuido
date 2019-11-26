const axios = require('axios')
const baseURL = process.env.BC_BASE_URL
// const CoinService = require('../modules/coin/CoinService')

// const keys = ['USD', 'USDT', 'EUR', 'BTC', 'GBP', 'CNY', 'ARS']

const coinMapping = async (coin) => {
  const {
    name,
    code,
    bid: buy,
    ask: sale
  } = coin

  return {
    name,
    code,
    value: {
      buy: buy.replace('.', '').replace(',', '.'),
      sale: sale.replace('.', '').replace(',', '.')
    }
  }
}

const getCoins = async () => {
  console.log('getCoinsAndSave Iniciado...')
  try {
    const coinsData = await axios.get(`${baseURL}/all`)
    const coins = coinsData.data
    const promise = Object.keys(coins).map(key => coinMapping(coins[key]))
    const data = await Promise.all(promise)
    await axios.post('http://localhost:3001/coins', data)
    console.log('getCoinsAndSave finalizado!')
  } catch (error) {
    console.error('Erro ao consultar moedas', error)
  }
}

module.exports = {
  key: 'getCoinsAndSave',
  options: {
    repeat: {
      every: 10000
    }
  },
  handle: getCoins
}
