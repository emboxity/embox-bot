const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'mutes people',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        console.log('mute is working')
        if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("You do not the permission to do this!");
        role=message.member.guild.roles.cache.find(role=>role.name=='muted')
        const target=message.mentions.members.first()
    
        
            if(!args[0]){
                const muteerror = new Discord.MessageEmbed()
                .setDescription("\<:x_:842221675775787019> Incorrect usage. +mute (user)")
                .setColor("#ff6961")
                .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
                message.channel.send(muteerror)
                
        }
            console.log('3');
            target.roles.add(role)
            message.channel.send(`${target} has been muted`)
        }}
        
    
