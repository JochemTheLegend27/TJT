const Discord = require('discord.js');
const bot = new Discord.Client();
//niet veranderen


const PREFIX = '$';

const fs = require('fs');

var stats = JSON.parse(fs.readFileSync('opslag/stats.json', 'utf8'));
var channels = JSON.parse(fs.readFileSync('opslag/channels.json', 'utf8'));
var upgrades = JSON.parse(fs.readFileSync('opslag/upgrades.json', 'utf8'));

//timeouts
const Used1 = new Set();//persoon cooldown
const Usedtimer = new Set();//persoon cooldown
bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('$help', {type: 'PLAYING'});
    
})

bot.on('message', msg => {
var botowner = '398441594094616578';
var serverowner      = msg.guild.owner.user;
var botid = '659768758235037697';
var gebruiker = msg.guild.id + msg.author.id;
let args = msg.content.substring(PREFIX.length).split(" "); 

function up (){

    var gebruiker = msg.guild.id + msg.author.id;
    stats[gebruiker].level = stats[gebruiker].level + 1;
        fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
            if(err) console.error(err);
            })
            function doRandHTlevelup(min, max) {
                min = Math.ceil(17);
                max = Math.floor(50);
                return Math.floor(Math.random() * (max - min)) + min;
              }
              const rekenen =  (stats[gebruiker].level-1) * 250;
              stats[gebruiker].XP = stats[gebruiker].XP - rekenen;
              console.log(stats[gebruiker].XP - rekenen);
 
              stats[gebruiker].normalrewards = stats[gebruiker].normalrewards + 1;
    stats[gebruiker].coins = stats[gebruiker].coins + (doRandHTlevelup()*stats[gebruiker].level);
    msg.channel.sendMessage('GG ' + msg.author.username + ' je bent nu level **' + stats[gebruiker].level + '**\nGeniet van je rewards!!')
    fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
        if(err) console.error(err);
        })
        level();
    }
    
    function level () {
        var gebruiker = msg.guild.id + msg.author.id;
        fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
            if(err) console.error(err);
            })
if(msg.author.id === botid){return;}
    if(stats[gebruiker].berichten === 10){msg.channel.sendMessage(msg.author.username + ' je hebt 10XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 10; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 25){msg.channel.sendMessage(msg.author.username + ' je hebt 10XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 10; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 50){msg.channel.sendMessage(msg.author.username + ' je hebt 10XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 10; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 100){msg.channel.sendMessage(msg.author.username + ' je hebt 10XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 10; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 200){msg.channel.sendMessage(msg.author.username + ' je hebt 40XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 40; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 250){msg.channel.sendMessage(msg.author.username + ' je hebt 20XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 20; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 500){msg.channel.sendMessage(msg.author.username + ' je hebt 50XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 50; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 1000){msg.channel.sendMessage(msg.author.username + ' je hebt 250XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 250; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 1500){msg.channel.sendMessage(msg.author.username + ' je hebt 500XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 500; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 2000){msg.channel.sendMessage(msg.author.username + ' je hebt 1000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 1000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 2500){msg.channel.sendMessage(msg.author.username + ' je hebt 1000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 1000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 5000){msg.channel.sendMessage(msg.author.username + ' je hebt 2000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 2000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 7500){msg.channel.sendMessage(msg.author.username + ' je hebt 3000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 3000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 10000){msg.channel.sendMessage(msg.author.username + ' je hebt 5000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 5000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 15000){msg.channel.sendMessage(msg.author.username + ' je hebt 10000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 10000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 30000){msg.channel.sendMessage(msg.author.username + ' je hebt 20000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 20000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 50000){msg.channel.sendMessage(msg.author.username + ' je hebt 25000XP gekregen'); stats[gebruiker].XP = stats[gebruiker].XP + 25000; stats[gebruiker].berichten = stats[gebruiker].berichten +1;}
    if(stats[gebruiker].berichten === 100000){msg.channel.sendMessage(msg.author.username + ' je hebt 0XP gekregen\nJe bent niet goed wijs dat je zo veel berichten hebt gehaald!');}
    fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
        if(err) console.error(err);
        })
        const rekenen =  (stats[gebruiker].level * 250);
    if(stats[gebruiker].XP -rekenen >= 0  ){up();}
    }
    
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
    berichten: 0,
    level: 1,
    XP: 0,
    coins: 100,
    rewards: 0,
    normalrewards: 0,
    epicrewards: 0,
    legendaryrewards: 0,
    coininkomen: 0,


  }
  if(!upgrades[gebruiker]) upgrades[gebruiker] = {
    kijker: 2,
    sub: 0,
    mod: 0,
    edditor: 0,
    fakeacc: 0, 
    add: 0,
    fanacc: 0,
    donaties: 0,
    vieuws: 0,
    sponsor: 0,
    like: 0,
    inkomen: 0,
    pizza: 0,
    discord: 0,
    koekje: 0,

    berekeningen: 0,
    }

fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
    if(err) console.error(err);
    })
    fs.writeFile('opslag/channels.json', JSON.stringify(channels),(err) => {
        if(err) console.error(err);
        })
        fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
            if(err) console.error(err);
            })
        if(Used1.has(gebruiker)){    
        }else{
            Used1.add(gebruiker);
        setTimeout(() => {
          Used1.delete(gebruiker);
        },1000 * 1.2);
stats[gebruiker].berichten = stats[gebruiker].berichten + 1;
}

function berekenen() {
    const geldverdienen = (upgrades[gebruiker].kijker*1) + (upgrades[gebruiker].sub*2) + (upgrades[gebruiker].mod*5) + (upgrades[gebruiker].edditor*6) + (upgrades[gebruiker].fakeacc*8) + (upgrades[gebruiker].add*15) + (upgrades[gebruiker].fanacc*20)
    +(upgrades[gebruiker].donaties*30) + (upgrades[gebruiker].vieuws*50) + (upgrades[gebruiker].sponsor*75) + (upgrades[gebruiker].like*80)+(upgrades[gebruiker].inkomen*100) + (upgrades[gebruiker].pizza*125)+(upgrades[gebruiker].discord*150) + (upgrades[gebruiker].koekje*200);
stats[gebruiker].coininkomen = geldverdienen;
    stats[gebruiker].rewards = stats[gebruiker].normalrewards + stats[gebruiker].epicrewards + stats[gebruiker].legendaryrewards;
fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
    if(err) console.error(err);
    })
}


    if(msg.channel.id !== channels[botid].channel1 ||msg.channel.id !== channels[botid].channel2 || msg.channel.id !== channels[botid].channel3|| msg.channel.id !== channels[botid].channel4|| msg.channel.id !== channels[botid].channel5|| msg.channel.id !== channels[botid].channel6|| msg.channel.id !== channels[botid].channel7|| msg.channel.id !== channels[botid].channel8|| msg.channel.id !== channels[botid].staffchannel){
        level();      
    }
berekenen();

if(!Usedtimer.has(gebruiker)){
        Usedtimer.add(gebruiker);
        setInterval(function(){
            berekenen();
            stats[gebruiker].coins = stats[gebruiker].coins + stats[gebruiker].coininkomen;
        fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
            if(err) console.error(err);
            })
        }, 1000*10);
        setInterval(function(){
            if(stats[gebruiker].normalrewards < 5){
       stats[gebruiker].normalrewards = stats[gebruiker].normalrewards +1;
        }
        fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
            if(err) console.error(err);
            })
        }, 1000*3600);
        setInterval(function(){
            if(stats[gebruiker].epicrewards < 2){
            stats[gebruiker].epicrewards = stats[gebruiker].epicrewards +1;
        }
        fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
            if(err) console.error(err);
            })
        }, 1000*86400);
        setInterval(function(){
            if(stats[gebruiker].legendaryrewards < 1){
       stats[gebruiker].legendaryrewards = stats[gebruiker].legendaryrewards +1;
        }
        fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
            if(err) console.error(err);
            })
        }, 1000*86400*7);

    }



if(!msg.content.startsWith(PREFIX) || msg.author.id === botid){return;}



if(msg.channel.id !== channels[botid].channel1 ||msg.channel.id !== channels[botid].channel2 || msg.channel.id !== channels[botid].channel3|| msg.channel.id !== channels[botid].channel4|| msg.channel.id !== channels[botid].channel5|| msg.channel.id !== channels[botid].channel6|| msg.channel.id !== channels[botid].channel7|| msg.channel.id !== channels[botid].channel8|| msg.channel.id !== channels[botid].staffchannel){
    if(channels[botid].channel1 === 'none' &&channels[botid].channel2 === 'none' &&channels[botid].channel3 === 'none' &&channels[botid].channel4 === 'none' &&channels[botid].channel5 === 'none' &&channels[botid].channel6 === 'none' &&channels[botid].channel7 === 'none' &&channels[botid].channel8 === 'none'){
        msg.channel.sendMessage('laat een owner van de server eerst een kanaal instellen');
        
    }else{
        level();
        if(msg.content === PREFIX + 'help'){
            var kleur = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
            const helpEmbed = new Discord.RichEmbed()
        .setColor(kleur)
        .setTitle("help aanvraag: " + msg.author.username)
        .setDescription('**$stats**     *al je gegevens*\n**$rewards**      *al je rewards*\n**$buy <aantal> xp**       *10xp = 200coins ($buy 1 xp koop je voor 200 coins 10 xp)*\n**$unlocks**        *alles wat je kunt unlocken*')
        msg.channel.send(helpEmbed);
    
        }
    

    if(msg.content === PREFIX + 'unlocks'){
        var kleur = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const unlockEmbed = new Discord.RichEmbed()
    .setColor(kleur)
    .setTitle("unlocks")
    .setDescription('$up <aantal> <het gene> *(max upgrades per keer 100)*\nkijker > **100** p.st.\nsubscriber > **150** p.st.\nmoderator > **200** p.st.\nedditor > **300** p.st.\nfake account > **400** p.st.\naddvertisement > **500** p.st.\nfan account > **600** p.st.\ndonaties > **700** p.st.\nvieuws > **800** p.st.\nsponsor > **1000** p.st.\nlike > **1100** p.st.\ninkomen > **1250** p.st.\npizza > **1400** p.st.\ndiscord > **1500** p.st.\nkoekie > **2000** p.st.')
   .addField('hoe meer het waard is hoe meer je krijgt.....' ,'*(maar ik laat express niet zien hoeveel je krijgt)*')
    msg.channel.send(unlockEmbed);

    }

    if(msg.content === PREFIX + 'stats'){
        const rekenen =  (stats[gebruiker].level * 250);
        var kleur = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const profileEmbed = new Discord.RichEmbed()
    .setColor(kleur)
    .setTitle("Profile: " + msg.author.username)
    .setImage(msg.author.avatarURL)
    .addField('Level **'+ stats[gebruiker].level + '**','XP **' + stats[gebruiker].XP + '/'+rekenen+ ' **')
    .addField('Berichten ',stats[gebruiker].berichten)
    .addField('Rewards' ,stats[gebruiker].rewards)
    .addField('Coins ',stats[gebruiker].coins)
    .addField('Inkomen per 10 sec: ', stats[gebruiker].coininkomen)
    msg.channel.send(profileEmbed);

    }
    if(msg.content === PREFIX + 'rewards'){
        var kleur = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
        const rewardsEmbed = new Discord.RichEmbed()
    .setColor(kleur)
    .setTitle("Rewards: " + msg.author.username)
    .setImage(msg.author.avatarURL)
    .setDescription('**Totaal:** \nnormal: **'+ stats[gebruiker].normalrewards +'/5** \nepic: **' + stats[gebruiker].epicrewards + '/2** \nLegendary: **' + stats[gebruiker].legendaryrewards + '/1**' )
    .addField('command: ', '$open <reward naam>')
    msg.channel.send(rewardsEmbed);

    }
    
    if(msg.content.startsWith(PREFIX + 'open')){
        if(args[1].includes('nor')){
            if(stats[gebruiker].normalrewards === 0){msg.channel.sendMessage('je hebt geen normal rewards om te openen')}else{
                stats[gebruiker].normalrewards = stats[gebruiker].normalrewards + -1;
                function doRandHTxp(min, max) {
                    min = Math.ceil(10);
                    max = Math.floor(30);
                    return Math.floor(Math.random() * (max - min)) + min;
                  }
                  
                  const xpgekregen = doRandHTxp();
                  const coinsgekregen = doRandHTxp() + 43;
                  stats[gebruiker].XP = stats[gebruiker].XP + xpgekregen;
                  stats[gebruiker].coins = stats[gebruiker].coins + coinsgekregen;
                  msg.channel.sendMessage('Je hebt **' + xpgekregen + '**XP gekregen\nJe hebt **' + coinsgekregen + '** coins gekregen');
            }
        }else{
            if(args[1].includes('epic')){
                if(stats[gebruiker].epicrewards === 0){msg.channel.sendMessage('je hebt geen epic rewards om te openen')}else{
                    stats[gebruiker].epicrewards = stats[gebruiker].epicrewards + -1;
                    function doRandHTxp(min, max) {
                        min = Math.ceil(50);
                        max = Math.floor(94);
                        return Math.floor(Math.random() * (max - min)) + min;
                      }
                      
                      const xpgekregen = doRandHTxp();
                      const coinsgekregen = doRandHTxp() + 123;
                      stats[gebruiker].XP = stats[gebruiker].XP + xpgekregen;
                      stats[gebruiker].coins = stats[gebruiker].coins + coinsgekregen;
                      msg.channel.sendMessage('Je hebt **' + xpgekregen + '**XP gekregen\nJe hebt **' + coinsgekregen + '** coins gekregen');
                }
            }else{
                if(args[1].includes('legen')){
                    if(stats[gebruiker].legendaryrewards === 0){msg.channel.sendMessage('je hebt geen legendary rewards om te openen')}else{
                        stats[gebruiker].legendaryrewards = stats[gebruiker].legendaryrewards + -1;
                        function doRandHTxp(min, max) {
                            min = Math.ceil(200);
                            max = Math.floor(450);
                            return Math.floor(Math.random() * (max - min)) + min;
                          }
                          
                          const xpgekregen = doRandHTxp();
                          const coinsgekregen = doRandHTxp() + 243;
                          stats[gebruiker].XP = stats[gebruiker].XP + xpgekregen;
                          stats[gebruiker].coins = stats[gebruiker].coins + coinsgekregen;
                          msg.channel.sendMessage('Je hebt **' + xpgekregen + '**XP gekregen\nJe hebt **' + coinsgekregen + '** coins gekregen');
                    }
                }else{
                    msg.channel.sendMessage('welke reward wil je openen\n$open normal/$open epic/$open legendary')
                }
            }
        }
        
    }

    if(msg.content.startsWith(PREFIX + 'pay')){
        let geldkrijger = msg.mentions.members.first();
        if(!geldkrijger){
          msg.channel.sendMessage('wie moet het geld krijgen?\nvoorbeeld: $pay @Jochem_Legend27#4112 1000');
          return;
        }
        if(!args[2]){msg.channel.sendMessage('hoeveel euro moet ' + geldkrijger +' krijgen?\nvoorbeeld: $pay @Jochem_Legend27#4112 1000'); return; }
        if(isNaN(args[2])){
          msg.channel.sendMessage('hoeveel euro moet ' + geldkrijger +' krijgen?\nvoorbeeld: $pay @Jochem_Legend27#4112 1000')
           return;
         }
         if(args[2].includes('-')){msg.channel.sendMessage('niet cheaten.....'); return;   }
         if(stats[gebruiker].coins + 1 < args[2]*1){msg.channel.sendMessage('je kan geen geld geven dat je niet hebt....'); return;}
         const gebruiker2 = msg.guild.id + geldkrijger.id ;
         if(!stats[gebruiker2]){msg.channel.sendMessage('deze persoon heeft nog geen gegevens'); return;}
         stats[gebruiker].coins = stats[gebruiker].coins +-(args[2]*1);
         
         stats[gebruiker2].coins = stats[gebruiker2].coins +(args[2]*1);
         fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
            if(err) console.error(err);
            })
          msg.channel.sendMessage(geldkrijger + ' heeft ' + args[2] + ' coins gekregen van ' + msg.author.username)
      }
      
        if(msg.content.startsWith(PREFIX + 'buy')){
  
            if(msg.content === PREFIX + 'buy'){
              msg.channel.sendMessage('Je kan **$buy 2 xp** doen');   return;
            }
            if(isNaN(args[1])){
                msg.channel.send('Meld hoeveel je wilt kopen')
                .then(msg => {
                  msg.delete(5000)
                  });
                  return;
                }
                if(args[1].includes('-')){
                    msg.channel.sendMessage(args[1] +' is geen geldige waarde')
                    return;
                  }
                  if(args[1].includes('.')){
                    msg.channel.sendMessage(args[1] +' is geen geldige waarde')
                    return;
                  }
                  const drawuitgave2 = (args[1] * 200);
                  const drawcoins2 = stats[gebruiker].coins + -(args[1] * 200);
                  const drawheal = stats[gebruiker].XP + (args[1] * 1);
                  if(stats[gebruiker].coins +1 > (args[1] * 200)) {
                    
                          msg.channel.sendMessage('Je hebt **' + (args[1]*1) + '**XP gekocht ');
                          msg.channel.sendMessage('Je hebt nu nog **' + (stats[gebruiker].coins + -(args[1] * 200))+'** coins' );
                          stats[gebruiker].coins = drawcoins2;
                          stats[gebruiker].XP = drawheal;
                  }else{
                    
                    msg.channel.sendMessage("Je hebt geen **" + drawuitgave2 + '** coins!' );
                  }
                    
        }
        if(msg.content.startsWith(PREFIX + 'up')){
            if(msg.content === PREFIX + 'up'){
                msg.channel.sendMessage('Je kan **$up 10 kijker** doen');   return;
              }
              if(isNaN(args[1])){
                  msg.channel.send('Meld hoeveel je wilt kopen')
                  .then(msg => {
                    msg.delete(5000)
                    });
                    return;
                  }
                  if(args[1].includes('-')){
                      msg.channel.sendMessage(args[1] +' is geen geldige waarde')
                      return;
                    }
                    if(args[1].includes('.')){
                      msg.channel.sendMessage(args[1] +' is geen geldige waarde')
                      return;
                    }
                    if(args[1]*1 > 100){
                        msg.channel.sendMessage(args[1] +' is teveel om te kopen in 1x')
                        return;
                    }
                    if(!args[2]){
                        msg.channel.sendMessage('wat wil je kopen?!!')
                        return;
                    }
if(args[2] === 'kijker'){
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 100*(upgrades[gebruiker].kijker-1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].kijker = upgrades[gebruiker].kijker + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].kijker = upgrades[gebruiker].kijker + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('sub')){
    if(upgrades[gebruiker].kijker <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 150*(upgrades[gebruiker].sub+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].sub = upgrades[gebruiker].sub + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].sub = upgrades[gebruiker].sub + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('mod')){
    if(upgrades[gebruiker].sub <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 200*(upgrades[gebruiker].mod+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].mod = upgrades[gebruiker].mod + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].mod = upgrades[gebruiker].mod + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('eddit')){
    if(upgrades[gebruiker].mod <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 300*(upgrades[gebruiker].edditor+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].edditor = upgrades[gebruiker].edditor + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].edditor = upgrades[gebruiker].edditor + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('fake')){
    if(upgrades[gebruiker].edditor <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 400*(upgrades[gebruiker].fakeacc+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].fakeacc = upgrades[gebruiker].fakeacc + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].fakeacc = upgrades[gebruiker].fakeacc + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('add')){
    if(upgrades[gebruiker].fakeacc <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 500*(upgrades[gebruiker].add+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].add = upgrades[gebruiker].add + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].add = upgrades[gebruiker].add + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('fan')){
    if(upgrades[gebruiker].add <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 600*(upgrades[gebruiker].fanacc+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].fanacc = upgrades[gebruiker].fanacc + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].fanacc = upgrades[gebruiker].fanacc + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('donatie')){
    if(upgrades[gebruiker].fanacc <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 700*(upgrades[gebruiker].donaties+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].donaties = upgrades[gebruiker].donaties + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].donaties = upgrades[gebruiker].donaties + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('vieuw')){
    if(upgrades[gebruiker].donaties <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 800*(upgrades[gebruiker].vieuws+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].vieuws = upgrades[gebruiker].vieuws + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].vieuws = upgrades[gebruiker].vieuws + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('spon')){
    if(upgrades[gebruiker].vieuws <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 1000*(upgrades[gebruiker].sponsor+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].sponsor = upgrades[gebruiker].sponsor + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].sponsor = upgrades[gebruiker].sponsor + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('like')){
    if(upgrades[gebruiker].sponsor <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 1100*(upgrades[gebruiker].like+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].like = upgrades[gebruiker].like + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].like = upgrades[gebruiker].like + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('inkomen')){
    if(upgrades[gebruiker].like <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 1250*(upgrades[gebruiker].inkomen+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].inkomen = upgrades[gebruiker].inkomen + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].inkomen = upgrades[gebruiker].inkomen + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('pizza')){
    if(upgrades[gebruiker].inkomen <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 1400*(upgrades[gebruiker].pizza+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].pizza = upgrades[gebruiker].pizza + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].pizza = upgrades[gebruiker].pizza + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('disc')){
    if(upgrades[gebruiker].pizza <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 1500*(upgrades[gebruiker].discord+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].discord = upgrades[gebruiker].discord + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].discord = upgrades[gebruiker].discord + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
if(args[2].startsWith('koek')){
    if(upgrades[gebruiker].koekje <1){msg.channel.sendMessage('unlock eerst het vorige item');return;}
    const x = args[1]*1;
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}
times (x) (() => {

  upgrades[gebruiker].berekeningen = 2000*(upgrades[gebruiker].koekje+1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  upgrades[gebruiker].koekje = upgrades[gebruiker].koekje + 1;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
})
if(upgrades[gebruiker].berekeningen < stats[gebruiker].coins +1 ){
  stats[gebruiker].coins = stats[gebruiker].coins + -upgrades[gebruiker].berekeningen;
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
  msg.channel.sendMessage('je hebt succesvol **' + args[1] + '** '+args[2]+' gekocht\nje hebt nog **' + stats[gebruiker].coins + '** euro')

}else{
  upgrades[gebruiker].koekje = upgrades[gebruiker].koekje + -(args[1]*1);
  fs.writeFile('opslag/upgrades.json', JSON.stringify(upgrades),(err) => {
    if(err) console.error(err);
    }) 
    msg.channel.sendMessage(msg.author.username + ' je hebt geen **' + upgrades[gebruiker].berekeningen + '** euro')
  return;
}

}
        }
    



    fs.writeFile('opslag/stats.json', JSON.stringify(stats),(err) => {
        if(err) console.error(err);
        })


}
}
if(msg.author.id === botowner || msg.author.id === serverowner.id){
    if(msg.content.startsWith(PREFIX + 'setchannel staff')&&channels[botid].staffchannel === 'none'){
    channels[botid].staffchannel = msg.channel.id; 
    msg.channel.sendMessage('kanaal succesvol gezet')
        fs.writeFile('opslag/channels.json', JSON.stringify(channels),(err) => {
            if(err) console.error(err);
            })
            return;
    }
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


level();
})
//niet veranderen
bot.login(process.env.BOT_TOKEN);
