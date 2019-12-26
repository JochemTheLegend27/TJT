const Discord = require('discord.js');
const bot = new Discord.Client();
//niet veranderen




const PREFIX = '$';

const fs = require('fs');

var stats = JSON.parse(fs.readFileSync('opslag/stats.json', 'utf8'));
var channels = JSON.parse(fs.readFileSync('opslag/channels.json', 'utf8'));


bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('$help', {type: 'PLAYING'});
    
})


bot.on('message', msg => {
var botowner = '398441594094616578';
var serverowner      = thisguild.owner.user;
var botid = '659768758235037697';
var gebruiker = msg.guild.id + msg.author.id;
let args = msg.content.substring(PREFIX.length).split(" "); 

if(!channels[botid])channels[botid] = {
    staffchannel: 'none',
    channel1: 'none',
    channel2: 'none',
    channel3: 'none',
    channel4: 'none',
    channel5: 'none',
    channel6: 'none',
    channel7: 'none',
    channel8: 'none',
  }
if(!stats[gebruiker])stats[gebruiker] = {
    berichten: 0
  }
fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
    if(err) console.error(err);
    })
    fs.writeFile('opslag/channels.json', JSON.stringify(channels),(err) => {
        if(err) console.error(err);
        })
stats[gebruiker].berichten = stats[gebruiker].berichten + 1;
fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
    if(err) console.error(err);
    })

if(msg.author.id === botowner || msg.author.id === serverowner.id){
    if(channels[botid].staffchannel === 'none'){
        msg.channel.sendMessage('zet eerst een staff channel met *$setchannel staff*')
        .then(msg => {
            msg.delete(6000)
          })
        return;
    } 

    if(msg.content.startsWith(PREFIX + 'staffhelp')){
        var kleur = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const staffhelpEmbed = new Discord.RichEmbed()
    .setColor(kleur)
    .setTitle("staff help")
    .addField('**$staffhelp** ' ,'help list')
    .addField('**$setchannel <getal 1/8>**','zet de channels voor deze bot')
    .addField('**$naam**','random gegenereerde naam')
  msg.channel.send(staffhelpEmbed);

    }

    if(msg.content.startsWith(PREFIX + 'setchannel')){
        if(args[1] === 'staff'){channels[botid].staffchannel = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        if(args[1] === '1'){channels[botid].channel1 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        if(args[1] === '2'){channels[botid].channel2 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}   
        if(args[1] === '3'){channels[botid].channel3 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        if(args[1] === '4'){channels[botid].channel4 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        if(args[1] === '5'){channels[botid].channel5 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        if(args[1] === '6'){channels[botid].channel6 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        if(args[1] === '7'){channels[botid].channel7 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        if(args[1] === '8'){channels[botid].channel8 = msg.channel.id; msg.channel.sendMessage('kanaal succesvol gezet')}
        fs.writeFile('opslag/channels.json', JSON.stringify(channels),(err) => {
        if(err) console.error(err);
        })
    }
}



if(msg.content === PREFIX + 'stats'){
    msg.channel.sendMessage('jij hebt **' + stats[gebruiker].berichten + '** berichten')
}
})
//niet veranderen
bot.login(process.env.BOT_TOKEN);
