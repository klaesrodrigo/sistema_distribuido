import bot from '../../bot/config'
import axios from 'axios'
const codes = ['USD', 'EUR', 'GBP']

const mappingCoins = (coins) => {
  return coins.filter((coin) => {
    const isTrue = codes.some(code => code === coin.code)
    if (isTrue) {
      return coin
    }
  })
}

const textCoins = (coins) => {
  return coins.map(coin => `\n${coin.name} \nCompra: ${coin.value.buy} - Venda ${coin.value.buy}\n`)
}

const generateCoinRelatorio = (name) => {
  return `
    Bom dia, ${name}! \nEstá é a cotação para o dia de hoje:\n`
}

module.exports = {
  key: 'sendReport',
  options: {
    repeat: {
      every: 5000,
      limit: 1
    }
  },
  handle: async () => {
    console.log('SendReport iniciado...')
    const coinsData = await axios.get('http://localhost:3001/coins')
    const userResp = await axios.get('http://localhost:3001/users')

    const users = userResp.data
    const coins = await mappingCoins(coinsData.data)

    users.forEach(async user => {
      bot.sendMessage(user.chat_id + '', await generateCoinRelatorio(user.name) + textCoins(coins))
    })
    console.log('SendReport finalizado...')
  }
}
