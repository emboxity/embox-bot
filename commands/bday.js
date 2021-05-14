const Discord = require('discord.js');

const db = require('quick.db');
module.exports = {
    name: 'happybirthday',
    aliases: 'hbday',
    description: "Tells someone happy birthday!",
    guildOnly: true,
    run: async (client, message, args) => {
        const target = message.mentions.members.first();

        if (target){
            const bday = new Discord.MessageEmbed()
            .setDescription(`Happy Birthday to You, happy Birthday to You, happy birthday dear ${target}. Happy Birthday to You. From good friends and true, From old friends and new, may good luck go with you, and happiness too.`)
            .setColor("#add8e6")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            message.channel.send(bday)
        }
    }}