module.exports = {
    name:"pp",
    desscription: "plays music in a voice channel.",

    run: (client, message, args) => {

        const random = Math.floor(Math.random()*10)
        console.log(random)
        const author = message.author.username


    const penisSymbol = '=';

    const length = penisSymbol.repeat(random);
    const ppsize = `8${length}>`;

    const DiscordJS = require("discord.js")
    const pfp = 'https://i.imgur.com/8yAwoai.png';

    const ppembedsmall = new DiscordJS.MessageEmbed()
        .setTitle(`${author}'s pp`)
        .setColor('#00000')
        .setFooter('Embox Bot • Made by shiba#2254', pfp)
        .setDescription(`${ppsize}
        SHMEET`)


        const ppembedmedium = new DiscordJS.MessageEmbed()
        .setTitle(`${author}'s pp`)
        .setColor('#00000')
        .setFooter('Embox Bot • Made by shiba#2254', pfp)
        .setDescription(`${ppsize}
        Not bad`)

        const ppembedlarge = new DiscordJS.MessageEmbed()
        .setTitle(`${author}'s pp`)
        .setColor('#00000')
        .setFooter('Embox Bot • Made by shiba#2254', pfp)
        .setDescription(`${ppsize}
        Bro got a big one`)

        if(random <= 3){
            message.channel.send(ppembedsmall)
        }



        if(random <= 8 && random >= 4){
            message.channel.send(ppembedmedium)
        }

        if(random <= 20 && random >= 8){
            message.channel.send(ppembedlarge)
        }










    }


}