const Discord = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: 'mute',
    description: 'Mutes a specified user for a certain amount of time.',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        console.log('mute is working')
        const guild = message.guild
        role = message.member.guild.roles.cache.find(role=>role.name=='muted')
        const logsChannel =  guild.channels.cache.find(channel => channel.name === 'logs')
        
        const ms = require("ms");


        const target = message.mentions.members.first()
        var user = (!target) ? await message.guild.members.fetch(args[0]) : console.log('No ID detected, so I am looking for a mention.')

        console.log(user);
        console.log(target);

   
        
        var length = (isNaN(args[1]) && !args[1].endsWith("s") && !args[1].endsWith("m") && !args[1].endsWith("h") && !args[1].endsWith("d")) ?  "Indefinitely"  : args[1]
        console.log(`Length is:${length}`)


        var reason = (length == "Indefinitely") ? args.slice(1).join(' ') : args.slice(2).join(' ');
        console.log(`Reason is:${reason}`)


    

        // perms



        if(!message.member.hasPermission("MANAGE_ROLES")){
            const unbanNOPERMSbozo = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You do not have permission to mute someone!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unbanNOPERMSbozo)
        } 

        if(!message.guild.me.hasPermission('MANAGE_ROLES')){
            const ripbozoL = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> I cannot mute this member! Ensure I have the right permissions and/or heirachy!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(ripbozoL)
        }

    
        // args

        if(!args[0]){
            const muteerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage. +mute (user) (reason)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(muteerror)
            }

        // using ids

        if(!user && !target){
            const muteERROR = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to mute")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(muteERROR)
            .catch(console.error);
        }

        if(length == "Indefinitely" && user && !target){
            const muteEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Mute")
            .setColor("#77dd77")
            .addField("Muted User", `${user}`)
            .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            await user.send(`You were muted from ${guild} for ${reason}!`)
            await user.roles.add(role);
            logsChannel.send(muteEmbed69420);
            return message.channel.send(muteEmbed69420); 
        }
        if(length !== "Indefinitely" && user && !target){
            const muteEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Mute")
            .setColor("#77dd77")
            .addField("Muted User", `${user}`)
            .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            await user.send(`You were muted from ${guild} for ${reason}!`)
            await user.roles.add(role);
            logsChannel.send(muteEmbed69420);
            message.channel.send(muteEmbed69420); 
            setTimeout(() => {
                const unmutedxd = new Discord.MessageEmbed()
                .setTitle("Unmute")
                .setColor("#77dd77")
                .addField("Unmuted User", `${user}`)
                .addField("Reason", "``Automatic unmute. User's punishment has ended.``")
                .setTimestamp()
                .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
                logsChannel.send(unmutedxd);
                user.roles.remove(role)
                }, ms(length));
            return;
        }

        // using mentions
        if(length == "Indefinitely" && !user && target){
            const muteEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Mute")
            .setColor("#77dd77")
            .addField("Muted User", `${target}`)
            .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.send(`You were muted from ${guild} for ${reason}!`)
            target.roles.add(role);
            logsChannel.send(muteEmbed69420);
            return message.channel.send(muteEmbed69420); 
        }
        if(length !== "Indefinitely" && !user && target){
            const muteEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Mute")
            .setColor("#77dd77")
            .addField("Muted User", `${target}`)
            .addField("Muted By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.send(`You were muted from ${guild} for ${reason}!`)
            target.roles.add(role);
            logsChannel.send(muteEmbed69420);
            message.channel.send(muteEmbed69420); 
            setTimeout(() => {
                const unmutedlol = new Discord.MessageEmbed()
                .setTitle("Unmute")
                .setColor("#77dd77")
                .addField("Unmuted User", `${target}`)
                .addField("Reason", "``Automatic unmute. User's punishment has ended.``")
                .setTimestamp()
                .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
                logsChannel.send(unmutedlol);
                target.roles.remove(role)
                }, ms(length));
            return;
        }
      
     
       
}
        
}
