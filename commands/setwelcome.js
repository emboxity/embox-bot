const Enmap = require("enmap");
const myEnmap = new Enmap();
const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`
module.exports = {
    name: 'setwelcome',
    aliases: ['sw'],
    description: "Simulates a welcome command",
    run: async (client, message, args) => {

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not the permission to do this!");


        if(!args[0]) return message.channel.send('Please provide a channel to set to `welcome`')


        const channel = message.guild.channels.cache.get(args[0].replace('<#','').replace('>',''))


        if(!channel) return message.channel.send('You did not provide a valid channel to set to `welcome`.')


        welcomechannel.set(message.guild.id, channel.id)


        if(!welcomechannel) return message.channel.send('You did not provide a channel to set to `welcome`')

        const setw = new Discord.MessageEmbed()
        .setDescription(`Success! You have set the welcome channel to ${channel}`)
        .setColor("#008000")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        message.channel.send(setw)

        
    }


}