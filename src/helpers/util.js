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
    console.log(baseURL)
    const coins = await axios.get(`${baseURL}/all/USD-BRL,USDT-BRL,EUR-BRL,BTC-BRL,GBP-BRL,CNY-BRL,ARS-BRL,`)
    return coins.data.map(coin => coinMapping(coin))
  } catch (error) {
    console.log('Erro ao consultar moedas', error)
  }
}

module.exports = {
  coinMapping,
  getCoins
}
