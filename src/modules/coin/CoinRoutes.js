const Controller = require('./CoinController')
const { Router } = require('express')
const routes = Router()

routes.get('/', new Controller().list)
routes.post('/', new Controller().create)

module.exports = routes
