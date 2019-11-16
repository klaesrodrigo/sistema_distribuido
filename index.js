require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const UserRoutes = require('./src/modules/user/UserRoutes')
const CoinRoutes = require('./src/modules/coin/CoinRoutes')
// const utils = require('./src/helpers/util')

const app = express()
app.use(bodyParser.json())

const port = process.env.PORT
const connection = process.env.DB_CONNECTION

console.log(connection)

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/users', UserRoutes)
app.use('/coins', CoinRoutes)

app.listen(port, () => {
  console.log(`Open: ${port}`)
})
