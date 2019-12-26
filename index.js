onst Discord = require('discord.js');
const bot = new Discord.Client();
//niet veranderen




const PREFIX = '$';

const fs = require('fs');




bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('$help', {type: 'PLAYING'});
    
})


bot.on('message', msg => {
var owner = '398441594094616578';




})
//niet veranderen
bot.login(process.env.BOT_TOKEN);
