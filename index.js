require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const UserRoutes = require('./src/modules/user/UserRoutes')
const CoinRoutes = require('./src/modules/coin/CoinRoutes')
const BullBoard = require('bull-board')
const Queue = require('./src/libs/Queue')
const cors = require('cors')
const requestIp = require('request-ip')

const app = express()
BullBoard.setQueues(Queue.queues.map(queue => queue.bull))
app.set('trust proxy', true)
app.use(bodyParser.json())
app.use((req, res, next) => {
  const clientIp = requestIp.getClientIp(req)
  console.log('Isso é um middleware')
  console.log(req.url)
  next()
})
app.use('/admin/queues', BullBoard.UI)
app.use(cors())
const port = process.env.PORT
const connection = process.env.DB_CONNECTION

console.log(connection)

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/users', UserRoutes)
app.use('/coins', CoinRoutes)

app.listen(port, () => {
  console.log(`Open: ${port}`)
})
