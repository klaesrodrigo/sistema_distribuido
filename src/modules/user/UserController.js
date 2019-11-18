const Service = require('./UserService')

class UserController {
  async list (req, res) {
    try {
      const users = await new Service().list()
      res.send(users)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }

  async create (req, res) {
    try {
      console.log('user')

      const user = await new Service().create(req.body)
      console.log(user)

      res.status(201).send(user)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}

module.exports = UserController
