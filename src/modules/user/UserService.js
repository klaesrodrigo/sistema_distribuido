const UserModel = require('./UserModel')

class UserService {
  list () {
    return new UserModel().list()
  }

  async create (data) {
    const userModel = new UserModel()
    if (await userModel.get({ chat_id: data.chat_id })) {
      return { message: 'Chat já iniciado', status: 422 }
    }

    const result = await userModel.post(data)
    return result
  }
}

module.exports = UserService
