const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'Unmutes a specified user',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        console.log('unmute is working')
        const guild = message.guild
        role = message.member.guild.roles.cache.find(role=>role.name=='muted')
        const target=message.mentions.members.first()
        const user = args[0];
        const logsChannel =  guild.channels.cache.find(channel => channel.name === 'logs')

        const reason = args.slice(1).join(' ');

        // perms

        if(!message.member.hasPermission("MANAGE_ROLES")){
            const unbanNOPERMSbozo = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You do not have permission to unmute someone!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unbanNOPERMSbozo)
        } 

        if(!message.guild.me.hasPermission('MANAGE_ROLES')){
            const ripbozoL = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> I cannot unmute this member! Ensure I have the right permissions and/or heirachy!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(ripbozoL)
        }

        //reasons

        if (reason.length < 1){
            const unbannoreason = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You must supply a reason for the unmute.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unbannoreason)
        } 
    
        // args

        if(!args[0]){
            const muteerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage. +unmute (user) (reason)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(muteerror)
            }

        // using ids

        if(!user){
            const muteERROR = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to unmute")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(muteERROR)
            .catch(console.error);
        }
            
        if(!reason){
            const nomutereason = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You must supply a reason for the mute.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(nomutereason)
        } 

        if(user && !target){
            const muteEmbed = new Discord.MessageEmbed()
            .setTitle("Mute")
            .setColor("#77dd77")
            .addField("Muted User", `${user}`)
            .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason", reason)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            user.send(`You were muted from ${guild} for ${reason}!`)
            user.roles.remove(role)
            logsChannel.send(muteEmbed);
            return message.channel.send(muteEmbed);
               
    
        }

        // using mentions
                
        
        if(target){
            const mutemebed123 = new Discord.MessageEmbed()
            .setTitle("Mute")
            .setColor("#77dd77")
            .addField("Banned User", `${target}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason", reason)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.send(`You were banned from ${guild} for ${reason}!`)
            target.roles.remove(role);
            logsChannel.send(mutemebed123);
            return message.channel.send(mutemebed123);
            // target.send(`You were banned from ${guild} for ${reason}!`)   
        }
            
         

        }}
        
    
