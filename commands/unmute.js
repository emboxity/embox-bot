const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
module.exports = {
    name: 'unmute',
    description: 'unmutes mfs',
    run: async(client, message, args) =>{
        console.log('mute is working')
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You do not the permission to do this!");
        role=message.member.guild.roles.cache.find(role=>role.name=='muted')
        const target=message.mentions.members.first()

        if(!args[0]){
            const unmute = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Incorrect usage. +unmute (user)")
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            message.channel.send(unmute)
            
           
    }
        console.log('3');
        target.roles.remove(role)
        message.channel.send(`${target} has been unmuted`)

        }}
        
    
