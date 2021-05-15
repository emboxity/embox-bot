module.exports = {
    name: 'price',
    aliases: 'ticker',
    description: 'Gives information on a ticker. Prices may not be 100% accurate.',
    cooldown: 2.5,
    guildOnly: true,
    run: async(client, message, args) =>{
        const ticker = args[0].toUpperCase();
        const Discord = require('discord.js'); 
         
        const sd = require('yahoo-stock-prices')
        const sa = await sd.getCurrentData(ticker);
        console.log(ticker)
        // message.channel.send(`The current price for ${ticker} is $${sa.price}`)
        const stockembed = new Discord.MessageEmbed()
            .setTitle('Stock Info')
            .setColor('#636261')
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`Requested by ${message.author}`)
            .addFields(
                {
                  name: `${ticker}`,
                  value: `$${sa.price}`,
                },
            )
            message.channel.send(stockembed)
        

    }

    }