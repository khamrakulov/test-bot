const { Telegraf } = require('telegraf')
const index = new Telegraf(process.env.BOT_TOKEN)

index.telegram.setWebhook('https://test-bot-xfeusw.herokuapp.com');
index.startWebhook(`/`, null, 4000);

index.use(function(ctx, next){
    try{
        if(ctx.chat == undefined) return;
        console.log("Hello World");
    }catch (e){
        console.log("Error");
    }
});

index.start((ctx) => ctx.reply('Welcome'))
index.help((ctx) => ctx.reply('Send me a sticker'))
index.on('sticker', (ctx) => ctx.reply('👍'))
index.hears('hi', (ctx) => ctx.reply('Hey there'))

index.launch();