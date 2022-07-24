const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.telegram.setWebhook('https://test-bot-xfeusw.herokuapp.com');
bot.startWebhook(`/`, null, 4000);

bot.use(function(ctx, next){
    try{
        if(ctx.chat == undefined) return;
        console.log("Hello World");
    }catch (e){
        console.log("Error");
    }
});

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch();