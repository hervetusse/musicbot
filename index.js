const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup');
const fs = require('fs')

const bot = new Telegraf('644819066:AAFShSOINBYtMEFWRv5SBUPc_HIk9WksRHg')
bot.start((ctx) => ctx.reply('Hi ' + ctx.update.message.chat.first_name + 'im sessionM_ bot'))

bot.hears('hi', (ctx) => {
    ctx.reply('Hey there, how can i help?', Markup
.keyboard([
    ['Play & Download music'],
   

])
.oneTime()
.resize()
.extra()
)

})

bot.hears('Play & Download music', (ctx) => {
   
    ctx.reply('audio loading...').then(function () {
        ctx.replyWithAudio({ source: './1.mp4' })  
        console.log('getting audio file...')
    })
   
})



bot.launch()