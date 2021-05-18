const Discord = require('discord.js');

module.exports = {
    name: 'unban',
    description: 'Unbans a specified user',
    cooldown: 1.5,
    guildOnly: true,
    run: async(client, message, args) =>{
        const guild = message.guild
        const logsChannel =  guild.channels.cache.find(channel => channel.name === 'logs')

        const target = message.mentions.members.first()
        var user = args[0];


   

        var reason = args.slice(1).join(' ');
        console.log(`Reason is:${reason}`)


        // perms

        if(!message.member.hasPermission("BAN_MEMBERS")){
            const unbanNOPERMSbozo = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You do not have permission to unban someone!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unbanNOPERMSbozo)
        } 

        if(!message.guild.me.hasPermission('BAN_MEMBERS')){
            const ripbozoL = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> I cannot unban this member! Ensure I have the right permissions and/or heirachy!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(ripbozoL)
        }


    
        // args

        if(!args[0]){
            const muteerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage. +unban (user) (reason)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(muteerror)
            }

        // using ids

        if(!user && !target){
            const unmerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to unban")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unmerror)
            .catch(console.error);
        }


        if(user && !target){
            const unmuteembed = new Discord.MessageEmbed()
            .setTitle("Unban")
            .setColor("#77dd77")
            .addField("Unbanned User", `${user}`)
            .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            await guild.members.unban(user);
            logsChannel.send(unmuteembed);
            return message.channel.send(unmuteembed);
               
    
        }


        
        if(!user && target){
            const mutemebed123 = new Discord.MessageEmbed()
            .setTitle("Unban")
            .setColor("#77dd77")
            .addField("Unbanned User", `${target}`)
            .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason",`"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            guild.members.unban(target);
            logsChannel.send(mutemebed123);
            return message.channel.send(mutemebed123);
        }
            
         

        }}
        
    
