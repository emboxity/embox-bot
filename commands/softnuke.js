
const Discord = require('discord.js');
const { Guild } = require("discord.js");


module.exports = {
    name: 'softnuke',
    description: 'clears 200 messages.',
    cooldown: 2,
    guildOnly: true,
    run: async (client, message, args) => {

        const nukeerror = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> You do not have the permission to do this! :volcano:")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(nukeerror);
        await message.channel.bulkDelete(100);
        await message.channel.bulkDelete(100);
        const softnuke = new Discord.MessageEmbed()
        .setTitle(':volcano: Softnuke')
        .setColor('#77dd77')
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            {
              name: `softnuked everything!`,
              value:`:volcano:`
            },
        )
        message.channel.send(softnuke)
    }}