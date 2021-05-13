const Discord = require(`discord.js`);


module.exports = {
    name: 'beattheshitoutof',
    cooldown: 2.5,
    description: "beats someone up",
    guildOnly: true,
    run: async (client, message, args) => {
        const target=message.mentions.members.first()
    
        
        if(!args[1] == !target){
            const beatuperror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please actually tag someone to beat the shit out of.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            message.channel.send(beatuperror)
            return;
        }

        message.channel.send(`https://tenor.com/view/anime-smash-lesbian-punch-wall-gif-4790446`)
    }}