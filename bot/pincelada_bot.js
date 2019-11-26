require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api')
const TOKEN = process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN, { polling: true })

const { action } = require('./actions')
bot.on('message', (msg) => {
  action(msg)
  bot.sendMessage(msg.chat.id, 'Received your message')
})
