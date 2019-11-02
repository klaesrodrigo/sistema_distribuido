require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const CoinService = require('./src/modules/coin/CoinService')
const UserRoutes = require('./src/modules/user/UserRoutes')
const utils = require('./src/helpers/util')

const app = express()

const port = process.env.PORT
const connection = process.env.DB_CONNECTION

console.log(connection)

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/coins', async (req, res) => {
  const coinService = new CoinService()
  try {
    const coins = await coinService.getAndSaveCoins()
    res.send(coins)
  } catch (error) {
    res.send(error)
  }
})

app.use('/users', UserRoutes)

app.listen(port, () => {
  console.log(`Open: ${port}`)
})
