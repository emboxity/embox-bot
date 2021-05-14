const Discord = require(`discord.js`);

module.exports = {
    name: 'ban',
    description: 'bans a user from a guild.',
    cooldown: 1.5,
    guildOnly: true,
    run: async(client, message, args) =>{
        const guild = message.guild
        const reason = args.slice(1).join(' ');
        const user = args[0];
        const target = message.mentions.members.first()
       

    //basic bot perms

    if(!message.member.hasPermission("BAN_MEMBERS")){
        const nopermsbozo = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> You do not have permission to unban someone!")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        return message.channel.send(nopermsbozo)
    } 

    if(!message.guild.me.hasPermission('BAN_MEMBERS')){
        const ripbozoL = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> I cannot ban this member! Ensure I have the right permissions and/or heirachy!")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        return message.channel.send(ripbozoL)
    }
        
    ///using id

    if(!user){
        const banerror = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to ban")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        return message.channel.send(banerror)
        .catch(console.error);
    }
        
        if(!reason){
            const bannoREASON = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You must supply a reason for the unban.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(bannoREASON)
        } 

       

        
        if(user && !target){
        const banEmbed = new Discord.MessageEmbed()
        .setTitle("Ban")
        .setColor("#77dd77")
        .addField("Banned User", `${user}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Reason", reason)
        .setTimestamp()
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        user.send(`You were banned from ${guild} for ${reason}!`)
        guild.members.ban(user);
        return message.channel.send(banEmbed);
           

    }
        ///using mentions




        if (!target.bannable){
            const targetbannnable = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> I cannot ban this member! Ensure I have the right permissions and/or heirachy!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(targetbannnable)
        }
        
        if(target.bannable){
            const banEmbed = new Discord.MessageEmbed()
            .setTitle("Ban")
            .setColor("#77dd77")
            .addField("Banned User", `${target}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason", reason)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.send(`You were banned from ${guild} for ${reason}!`)
            guild.members.ban(target);
            return message.channel.send(banEmbed);
            // target.send(`You were banned from ${guild} for ${reason}!`)   
        }
        
    }
    
}