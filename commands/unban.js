const Discord = require(`discord.js`);

module.exports = {
    name: 'unban',
    description: 'unbans a user from a guild.',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        const guild = message.guild
        const reason = args.slice(1).join(' ');
        const user = args[0];
        const logsChannel =  guild.channels.cache.find(channel => channel.name === 'logs')

        //basic perms

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

        //reasons

        if (reason.length < 1){
            const unbannoreason = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You must supply a reason for the unban.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unbannoreason)
        } 

        // args
        
        if(!args[0]){
            const unbanerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage. +unban (user) (reason)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(unbanerror)
        }

        //using ids
        if(!user){
            const uerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to unban")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(uerror)
            .catch(console.error);
        }


       
        const unbanEmbed = new Discord.MessageEmbed()
        .setTitle("Unban")
        .setColor("#77dd77")
        .addField("Unbanned User", `${user}`)
        .addField("Unbanned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Reason", reason)
        .setTimestamp()
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
    
        guild.members.unban(user);
        message.channel.send(unbanEmbed);
        logsChannel.send(unbanEmbed);
}}