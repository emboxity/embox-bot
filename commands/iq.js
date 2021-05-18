const Discord = require('discord.js');
module.exports = {
    name:"iq",
    desscription: "Shows a targets IQ.",
    cooldown: 1,
    guildOnly: true,

    run: (client, message, args) => {

        const iq = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];

        var random = Math.floor(Math.random() * iq.length)
        const target = message.mentions.users.first()
        const author = message.author.username
        console.log(random)


        if (!args[0]){
            const useriq = new Discord.MessageEmbed()
            .setTitle(':brain: iq generator 6000')
            .setDescription(` ${message.author.username}, your iq is ${iq[random]}`)
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            // message.channel.send(iq[random])
            message.channel.send(useriq)
            }

        if (args[0] = target){
        const iqembed = new Discord.MessageEmbed()
        .setTitle(':brain: iq generator 6000')
        .setDescription(` ${target.username}, your iq is ${iq[random]}`)
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        // message.channel.send(iq[random])
        message.channel.send(iqembed)
        }

    }}