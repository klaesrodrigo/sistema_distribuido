require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')
const TOKEN = process.env.BOT_TOKEN

module.exports = new TelegramBot(TOKEN, { polling: true })
