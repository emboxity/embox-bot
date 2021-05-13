const Discord = require('discord.js');
const { Guild } = require("discord.js");


module.exports = {
    name: 'purge',
    description: "Clears a specified amount of messages.",
    cooldown: 2,
    guildOnly: true,
    run: async (client, message, args) => {

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You do not have the permission to do this!");

        if(!args[0]) return message.channel.send("Please enter a valid number to delete.");

        const number = parseInt(args[0], 10);

        if(isNaN(number)) return message.channel.send("Only numbers are allowed.");

        if(number > 99) return message.channel.send("The maximum amount of messages that can be deleted is 100.");

        await message.channel.bulkDelete(number + 1);
        const purgeembed = new Discord.MessageEmbed()
        .setDescription(`\<:y_:842221758500569088> Successfully deleted ${number} messages`)
        .setColor("#00FF00")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        message.channel.send(purgeembed)

    }

};