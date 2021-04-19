const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
module.exports = {
    name: 'mute',
    description: 'mutes mfs',
    run: async(client, message, args) =>{
        console.log('mute is working')
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You do not the permission to do this!");
        role=message.member.guild.roles.cache.find(role=>role.name=='muted')
        const target=message.mentions.members.first()
    
        
            if(!args[0]){
                const muteerror = new Discord.MessageEmbed()
                .setDescription(":no_entry_sign: Incorrect usage. +mute (user)")
                .setColor("#ff0808")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                message.channel.send(muteerror)
                
        }
            console.log('3');
            target.roles.add(role)
            message.channel.send(`${target} has been muted`)
        }}
        
    
