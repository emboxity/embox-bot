const Discord = require('discord.js');
const fetch = require('node-fetch')
module.exports = {
    name: 'ban',
    description: 'Bans a specified user for a certain amount of time.',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        console.log('Ban is working')
        const guild = message.guild
        role = message.member.guild.roles.cache.find(role=>role.name=='Banned')
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



        if(!message.member.hasPermission("BAN_MEMBERS")){
            const unbanNOPERMSbozo = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You do not have permission to ban someone!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unbanNOPERMSbozo)
        } 

        if(!message.guild.me.hasPermission('BAN_MEMBERS')){
            const ripbozoL = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> I cannot ban this member! Ensure I have the right permissions and/or heirachy!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(ripbozoL)
        }

    
        // args

        if(!args[0]){
            const Banerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage. +ban (user) (reason)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(Banerror)
            }

        // using ids

        if(!user && !target){
            const BanERROR = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to ban")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(BanERROR)
            .catch(console.error);
        }

        if(length == "Indefinitely" && user && !target){
            const BanEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Ban")
            .setColor("#77dd77")
            .addField("Banned User", `${user}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            await user.send(`You were Banned from ${guild} for ${reason}!`)
            await guild.members.ban(user);
            logsChannel.send(BanEmbed69420);
            return message.channel.send(BanEmbed69420); 
        }
        if(length !== "Indefinitely" && user && !target){
            const BanEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Ban")
            .setColor("#77dd77")
            .addField("Banned User", `${user}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            await user.send(`You were Banned from ${guild} for ${reason}!`)
            await guild.members.ban(user);
            logsChannel.send(BanEmbed69420);
            message.channel.send(BanEmbed69420); 
            setTimeout(() => {
                const unBannedxd = new Discord.MessageEmbed()
                .setTitle("Unban")
                .setColor("#77dd77")
                .addField("Unbanned User", `${user}`)
                .addField("Reason", "``Automatic unban. User's punishment has ended.``")
                .setTimestamp()
                .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
                logsChannel.send(unBannedxd);
                guild.members.unban(target);
                }, ms(length));
            return;
        }

        // using mentions


        if(length == "Indefinitely" && !user && target){
            const BanEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Ban")
            .setColor("#77dd77")
            .addField("Banned User", `${target}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.send(`You were Banned from ${guild} for ${reason}!`)
            guild.members.ban(target);
            logsChannel.send(BanEmbed69420);
            return message.channel.send(BanEmbed69420); 
        }
        if(length !== "Indefinitely" && !user && target){
            const BanEmbed69420 = new Discord.MessageEmbed()
            .setTitle("Ban")
            .setColor("#77dd77")
            .addField("Banned User", `${target}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField(`Time:`,`${length}`)
            .addField("Reason", `"${reason}"`)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.send(`You were Banned from ${guild} for ${reason}!`)
            guild.members.ban(target);
            logsChannel.send(BanEmbed69420);
            message.channel.send(BanEmbed69420); 
            setTimeout(() => {
                const unBannedlol = new Discord.MessageEmbed()
                .setTitle("Unban")
                .setColor("#77dd77")
                .addField("UnBanned User", `${target}`)
                .addField("Reason", "``Automatic unban. User's punishment has ended.``")
                .setTimestamp()
                .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
                logsChannel.send(unBannedlol);
                guild.members.unban(target);
                }, ms(length));
            return;
        }
      
     
       
}
        
}
