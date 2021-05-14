const Discord = require(`discord.js`);

module.exports = {
    name: 'kick',
    description: 'Kick a user from a guild.',
    cooldown: 1.5,
    guildOnly: true,
    run: async(client, message, args) =>{
        const guild = message.guild
        const reason = args.slice(1).join(' ');
        const user = args[0];
        const target = message.mentions.members.first()
       

    //basic bot perms

    if(!message.member.hasPermission("KICK_USERS")){
        const nopermsbozo = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> You do not have permission to kick someone!")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        return message.channel.send(nopermsbozo)
    } 

    if(!message.guild.me.hasPermission('KICK_MEMBERS')){
        const ripbozoL = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> I cannot kick this member! Ensure I have the right permissions and/or heirachy!")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        return message.channel.send(ripbozoL)
    }
        
    ///using id

    if(!user){
        const kickerror = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> Please mention/provide an ID of someone to kick")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        return message.channel.send(kickerror)
        .catch(console.error);
    }
        
        if(!reason){
            const nokickreason = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You must supply a reason for the kick.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(nokickreason)
        } 

       

        
        if(user && !target){
        const kickembed = new Discord.MessageEmbed()
        .setTitle("Kick")
        .setColor("#77dd77")
        .addField("Kicked User", `${user}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Reason", reason)
        .setTimestamp()
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        user.send(`You were kicked from ${guild} for ${reason}!`)
        user.kick();
        return message.channel.send(kickembed);
           

    }
        ///using mentions




        if (!target.kickable){
            const targetkickable = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> I cannot kick this member! Ensure I have the right permissions and/or heirachy!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(targetkickable)
        }
        
        if(target.kickable){
            const kickingEmbed = new Discord.MessageEmbed()
            .setTitle("Kick")
            .setColor("#77dd77")
            .addField("Kicked User", `${target}`)
            .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Reason", reason)
            .setTimestamp()
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            target.send(`You were kicked from ${guild} for ${reason}!`)
            target.kick();
            return message.channel.send(kickingEmbed);
            // target.send(`You were kicked from ${guild} for ${reason}!`)   
        }
        
    }
    
}