const Discord = require('discord.js');
const { Guild } = require("discord.js");
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'nuke',
    description: "this clears a specified amount of messages",
    cooldown: 2.5,
    run: async (client, message, args) => {

            const nukeerror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: You do not have the permission to do this! :volcano:")
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)

        if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(nukeerror);

        const nukepermissionserror = new Discord.MessageEmbed()
        .setDescription(":no_entry_sign: I do not have the 'Manage Channels' permission to do this! :volcano:")
        .setColor("#ff0808")
        .setFooter('Embox Bot * made by shiba#2254',pfp)

        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(nukepermissionserror);

        let reason = args.join(" ")
        const nukechannel = message.channel


        const nukenoreason = new Discord.MessageEmbed()
        .setDescription(":no_entry_sign: No reason for nuke provided. Try '+nuke (reason)' :volcano:")
        .setColor("#ff0808")
        .setFooter('Embox Bot * made by shiba#2254',pfp)


        //If there is no reason provided, it will return this message
        if(!reason) return message.channel.send(nukenoreason)

        const nukechanneldelete = new Discord.MessageEmbed()
        .setDescription(":no_entry_sign: ${nukechannel} is not deletable. :volcano:")
        .setColor("#ff0808")
        .setFooter('Embox Bot * made by shiba#2254',pfp)


        //If the channel is not deletable for any reason, it will say that and the channel it is trying to delete.
        if(!nukechannel.deletable) return message.channel.send(nukechanneldelete)


        //actual execution of the command, the catch part is just to see if there are any errors and it will output them in the console.
        await nukechannel.clone().catch(err => console.log(err))
        await nukechannel.delete(reason).catch(err => console.log(err))




    }

}
  

