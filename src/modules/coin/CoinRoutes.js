const Controller = require('./CoinController')
const { Router } = require('express')
const routes = Router()

routes.get('/', new Controller().getAndSaveCoins)

routes.get('/all', new Controller().list)

module.exports = routes
