const { Telegraf } = require('telegraf');
const bot = new Telegraf("5278678084:AAFrgy4RUcbv_gI5lH0fydL5whpI4f2O3n8")

const admin_id = 2111350581;

bot.start((ctx) => {
    const first_name = ctx.message.chat.id;
    ctx.reply(`Welcome, ${first_name}`);
})
bot.help((ctx) => ctx.reply('This bot help you for connecting with Kamron Khamrakulov'))
bot.hears(/./, ctx => {
    const chat_id = ctx.message.chat.id;
    const message_id = ctx.message.message_id;
    const text = ctx.message.text;

    console.log(ctx)

    if ((chat_id == admin_id) && (ctx.message.reply_to_message)){
        console.log('Reply keldi, birad!')
        const reply_chat_id = ctx.message.reply_to_message.chat.id;
        ctx.telegram.sendMessage(reply_chat_id, text)
    }else{
        ctx.forwardMessage(admin_id, chat_id, false, false, message_id);
    }
})

bot.launch();