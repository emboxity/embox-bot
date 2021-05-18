const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'Unmutes a specified user',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        const guild = message.guild
        role = message.member.guild.roles.cache.find(role=>role.name=='muted')
        const logsChannel =  guild.channels.cache.find(channel => channel.name === 'logs')
        
        const ms = require("ms");


        const target = message.mentions.members.first()
        var user = (!target) ? await message.guild.members.fetch(args[0]) : console.log('No ID detected, so I am looking for a mention.')

        console.log(user);
        console.log(target);

   

        var reason = args.slice(1).join(' ');
        console.log(`Reason is:${reason}`)


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


    
        // args

        if(!args[0]){
            const muteerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage. +unmute (user) (reason)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(muteerror)
            }

        // using ids

        if(!user && !target){
            const unmerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to unmute")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unmerror)
            .catch(console.error);
        }


        if(user && !target){
            const unmuteembed = new Discord.MessageEmbed()
            .setTitle("Unmute")
            .setColor("#77dd77")
            .addField("Unmuted User", `${user}`)
            .addField("Unmuted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            await user.roles.remove(role)
            logsChannel.send(unmuteembed);
            return message.channel.send(unmuteembed);
               
    
        }


        
        if(!user && target){
            const mutemebed123 = new Discord.MessageEmbed()
            .setTitle("Unmute")
            .setColor("#77dd77")
            .addField("Unmuted User", `${target}`)
            .addField("Unmuted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason",`"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.roles.remove(role);
            logsChannel.send(mutemebed123);
            return message.channel.send(mutemebed123);
        }
            
         

        }}
        
    
