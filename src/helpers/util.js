const axios = require('axios')

const baseURL = process.env.BC_BASE_URL

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
      buy,
      sale
    }
  }
}

const getCoins = async () => {
  try {
    const coinsData = await axios.get(`${baseURL}/all/USD-BRL,USDT-BRL,EUR-BRL,BTC-BRL,GBP-BRL,CNY-BRL,ARS-BRL,`)
    const coins = coinsData.data
    const promise = Object.keys(coins).map(key => coinMapping(coins[key]))
    const data = await Promise.all(promise)
    return data
  } catch (error) {
    console.log('Erro ao consultar moedas', error)
  }
}

module.exports = {
  coinMapping,
  getCoins
}
