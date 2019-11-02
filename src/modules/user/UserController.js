const Service = require('./UserService')

class UserController {
  async list (req, res) {
    try {
      const users = await new Service().list()
      res.send(users)
    } catch (error) {
      console.error(error)
      res.send(error)
    }
  }
}

module.exports = UserController
