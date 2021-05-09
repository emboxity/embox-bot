const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'beattheshitoutof',
    cooldown: 2.5,
    description: "beats someone up",
    run: async (client, message, args) => {
        const target=message.mentions.members.first()
    
        
        if(!args[1] == !target){
            const beatuperror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Please actually tag someone to beat the shit out of.")
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            message.channel.send(beatuperror)
            return;
        }

        message.channel.send(`https://tenor.com/view/anime-smash-lesbian-punch-wall-gif-4790446`)
    }}
