const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'snipe',
    aliases: [],
    description: 'Shows the last deleted message when used in a specified channel.',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) => {

        client.on('messageDelete', (message) => {
            db.set(`snipe_${message.channel.id}`, {
                content: message.content,
                author: message.author
            })
        })

    const snipe = db.get(`snipe_${message.channel.id}`)
        
        // if (snipe.author.id === '825510668819628032'){
        //     const bozo = new Discord.MessageEmbed()
        //     .setDescription("\<:x_:842221675775787019> Nothing to snipe!")
        //     .setColor("#ff6961")
        //     .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

        //     return message.reply(bozo)
        // }

        if (!snipe){
            const nosnipe = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Nothing to snipe!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

            return message.reply(nosnipe)
            // return message.channel.send('Nothing to snipe')
        } 
        
        const embed = new Discord.MessageEmbed()
            .setDescription(snipe.content)
            .setAuthor(snipe.author.tag, snipe.author.displayAvatarURL)
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            .setColor('#77dd77')
            .setTimestamp()
            message.channel.send(embed)
    }}