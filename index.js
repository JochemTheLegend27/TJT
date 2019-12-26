onst Discord = require('discord.js');
const bot = new Discord.Client();
//niet veranderen




const PREFIX = '$';

const fs = require('fs');

var stats = JSON.parse(fs.readFileSync('opslag/stats.json', 'utf8'));


bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('$help', {type: 'PLAYING'});
    
})


bot.on('message', msg => {
var owner = '398441594094616578';
var gebruiker = msg.guild.id + msg.author.id;
if(!stats[gebruiker])stats[botid] = {
    berichten: 0
  }
fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
    if(err) console.error(err);
    })
stats[gebruiker].berichten = stats[gebruiker].berichten + 1;
fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
    if(err) console.error(err);
    })
if(msg.content === PREFIX + 'stats'){
    msg.channel.sendMessage('jij hebt **' + stats[gebruiker].berichten + '** berichten')
}




})
//niet veranderen
bot.login(process.env.BOT_TOKEN);
