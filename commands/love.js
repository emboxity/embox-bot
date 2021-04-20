const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'love',
    description: 'random cat image',
    run: async(client, message, args) =>{
        const target=message.mentions.members.first()

        if (target) {
            const partnerlol = new Discord.MessageEmbed()
            .setDescription(`:two_hearts:  ${message.author} x ${target}
            %${Math.floor(Math.random()*100)}`)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            message.channel.send(partnerlol);

        }
}}