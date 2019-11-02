const UserModel = require('./UserModel')

class UserService {
  list () {
    return new UserModel().list()
  }
}

module.exports = UserService
