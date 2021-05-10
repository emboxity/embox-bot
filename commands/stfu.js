const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
module.exports = {
    name: "stfu",
    description: "tells person to stfu",
    guildOnly: true,
    run: (client, message, args) => {
        const target = message.mentions.members.first();
        if(!args[1] == !target){
            const stfuerror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Please actually tag someone to shut the fuck up.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
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