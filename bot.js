const { Telegraf } = require('telegraf')

bot.telegram.setWebhook('https://myaddress.com');
bot.startWebhook(`/`, null, 4000);

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch();