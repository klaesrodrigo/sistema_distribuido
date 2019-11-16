const axios = require('axios')

const mapping = {
  '/start': async (msg) => {
    const { chat } = msg
    const user = { name: chat.first_name + ' ' + chat.last_name, chat_id: chat.id }
    console.log(user)

    try {
      const result = await axios.post('http://localhost:3001/users', user)
      return result
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

const action = (msg) => {
  console.log('msg')

  const action = mapping[msg.text]
  action(msg)
}

module.exports = {
  action
}
