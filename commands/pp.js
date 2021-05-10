const db = require('quick.db');

module.exports = {
    name:"pp",
    desscription: "Shows a targets PP size.",
    guildOnly: true,

    run: (client, message, args) => {

        db.add('times.pp', 1); 
        const timesUsed = db.get('times.pp');

        const random = Math.floor(Math.random()*10)
        console.log(random)
        const author = message.author.username
        var ppargs0 = args[0]
        var mention = message.mentions.users.first().username
        
        
        if(mention){
            ppargs0 = mention
        }
       

    const penisSymbol = '=';

    const length = penisSymbol.repeat(random);
    const ppsize = `8=${length}>`;

    const DiscordJS = require("discord.js")
    const pfp = 'https://i.imgur.com/8yAwoai.png';

    if(!args[0]){
        return message.channel.send('Ping someone or yourself to find your PP size.')
    }

    if (ppargs0){
    const ppembedsmall = new DiscordJS.MessageEmbed()
        .setTitle(`${ppargs0}'s pp`)
        .setColor(message.member.displayHexColor)
        .setFooter(`${timesUsed} uses`)
        .setDescription(`${ppsize}`)
        .addField(`SHMEET`,`Go grow one`)


        const ppembedmedium = new DiscordJS.MessageEmbed()
        .setTitle(`${ppargs0}'s pp`)
        .setColor(message.member.displayHexColor)
        .setFooter(`${timesUsed} uses`)
        .setDescription(`${ppsize}`)
        .addField('Not bad',`Needs some growing`)

        const ppembedlarge = new DiscordJS.MessageEmbed()
        .setTitle(`${ppargs0}'s pp`)
        .setColor(message.member.displayHexColor)
        .setFooter(`${timesUsed} uses`)
        .setDescription(`${ppsize}`)
        .addField('Bro got a big one',`Sheesh my g`)
        if(random <= 3){
            message.channel.send(ppembedsmall)
        }



        if(random <= 8 && random >= 4){
            message.channel.send(ppembedmedium)
        }

        if(random <= 20 && random >= 9){
            message.channel.send(ppembedlarge)
        }
        return;
        
    }

    const ppembedsmall1 = new DiscordJS.MessageEmbed()
    .setTitle(`${author}'s pp`)
    .setColor(message.member.displayHexColor)
    .setFooter(`${timesUsed} uses`)
    .setDescription(`${ppsize}`)
    .addField(`SHMEET`,`Go grow one`)


    const ppembedmedium1 = new DiscordJS.MessageEmbed()
    .setTitle(`${author}'s pp`)
    .setColor(message.member.displayHexColor)
    .setFooter(`${timesUsed} uses`)
    .setDescription(`${ppsize}`)
    .addField('Not bad',`Needs some growing`)

    const ppembedlarge1 = new DiscordJS.MessageEmbed()
    .setTitle(`${author}'s pp`)
    .setColor(message.member.displayHexColor)
    .setFooter(`${timesUsed} uses`)
    .setDescription(`${ppsize}`)
    .addField('Bro got a big one',`Sheesh my g`)
        

        if(random <= 3){
            message.channel.send(ppembedsmall1)
        }



        if(random <= 8 && random >= 4){
            message.channel.send(ppembedmedium1)
        }

        if(random <= 20 && random >= 9){
            message.channel.send(ppembedlarge1)
        }










    }


}