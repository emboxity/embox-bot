const Discord = require('discord.js');

module.exports = {
    name: "stfu",
    description: "tells person to stfu",
    guildOnly: true,
    run: (client, message, args) => {
        const target = message.mentions.members.first();
        if(!args[1] == !target){
            const stfuerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please actually tag someone to shut the fuck up.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(stfuerror)
            return;
        }

        if(target.id === message.author.id){
            return message.channel.send('You cannot tell yourself to shut the fuck up.')
        }

        message.channel.bulkDelete(1);
        message.channel.send(`${target} bro stfu :middle_finger:`)


}
}