const Model = require('./schema/UserSchema')

class UserModel {
  async post (data) {
    const user = await new Model(data).save()
    return user
  }

  async list () {
    const users = await Model.find()
    return users
  }
}

module.exports = UserModel
