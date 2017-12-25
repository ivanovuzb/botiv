const TelegramBot = require("node-telegram-bot-api")
const fs = require ('fs')
const debug = require('./helpers')

const TOKEN = '468440302:AAEOK9-J38i-gj0yo1PuQneeB6WDu5j2jrY'

const bot = new TelegramBot(TOKEN, {
    polling: {
        interval: 300,
        avtoStart: true,
        params: {
            timeout: 10
        }
    }
})
console.log('ok------------------------------------------------------ok')


bot.onText(/\/pay/, msg => {
    bot.sendInvoice(
        msg.chat.id,
        'ledlamp',
        'power 10w',
        'payload',
        '371317599:TEST:149136604',
        'random',
        'UZS',
        [
            {
                label: 'lamp',
                amount: 1000000,
            }
        ],
        {
            photo_url: 'http://hm.uz/wa-data/public/shop/products/86/38/23886/images/7445/7445.750.jpg',
            need_name: true,
            is_flexible: true,
        }
    )
})

