const Controller = require('./UserController')
const { Router } = require('express')
const routes = Router()

routes.get('/', new Controller().list)
routes.post('/', new Controller().create)

module.exports = routes
