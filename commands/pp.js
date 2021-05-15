const Discord = require('discord.js');
module.exports = {
    name:"pp",
    desscription: "Shows a targets PP size.",
    cooldown: 1,
    guildOnly: true,

    run: (client, message, args) => {


        const random = Math.floor(Math.random()*15)
        const target = message.mentions.users.first()
        const author = message.author.username
        const penisSymbol = '=';
        const length = penisSymbol.repeat(random);
        const ppsize = `8=${length}D`;
        console.log(random)

        if (!args[0]){
            const userEmbed = new Discord.MessageEmbed()
            .setTitle('pp size calculator 6000')
            .setDescription(`${author}, your pp size is ${ppsize}`)
            .setColor('#77dd77')
            .setFooter(`📏 ${random + 1} inches`)
            return message.channel.send(userEmbed)
        //  message.channel.send(`${author}, your pp size is ${ppsize}`) 
        }

            if (args[0] = !target){
                const userEmbed = new Discord.MessageEmbed()
                .setTitle('pp size calculator 6000')
                .setDescription(`${author}, your pp size is ${ppsize}`)
                .setColor('#77dd77')
                .setFooter(`📏 ${random + 1} inches`)
                message.channel.send(userEmbed)
        }
    

        if (args[0] = target){
            const targetEmbed = new Discord.MessageEmbed()
            .setTitle('pp size calculator 6000')
            .setDescription(`${target.username}'s pp size is ${ppsize}`)
            .setColor('#77dd77')
            .setFooter(`📏 ${random + 1} inches`)
            message.channel.send(targetEmbed)
        //  message.channel.send(`${target.username}'s pp size is ${ppsize}`)
        }

        

    }}