const Discord = require('discord.js');
const { Guild } = require("discord.js");


module.exports = {
    name: 'nuke',
    description: "this clears a specified amount of messages",
    cooldown: 2.5,
    guildOnly: true,
    run: async (client, message, args) => {

            const nukeerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> You do not have the permission to do this! :volcano:")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(nukeerror);

        const nukepermissionserror = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> I do not have the 'Manage Channels' permission to do this! :volcano:")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(nukepermissionserror);

        let reason = args.join(" ")
        const nukechannel = message.channel


        const nukenoreason = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> No reason for nuke provided. Try '+nuke (reason)' :volcano:")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())


        //If there is no reason provided, it will return this message
        if(!reason) return message.channel.send(nukenoreason)

        const nukechanneldelete = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> ${nukechannel} is not deletable. :volcano:")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())


        //If the channel is not deletable for any reason, it will say that and the channel it is trying to delete.
        if(!nukechannel.deletable) return message.channel.send(nukechanneldelete)


        //actual execution of the command, the catch part is just to see if there are any errors and it will output them in the console.
        await nukechannel.clone().catch(err => console.log(err))
        await nukechannel.delete(reason).catch(err => console.log(err))




    }

}
  

