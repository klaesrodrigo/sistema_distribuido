const axios = require('axios')

const baseURL = process.env.BC_BASE_URL

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
  try {
    const coinsData = await axios.get(`${baseURL}/all`)
    const coins = coinsData.data
    console.log(coins)

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
