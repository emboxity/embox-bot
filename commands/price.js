module.exports = {
    name: 'price',
    aliases: 'help',
    description: '+price',
    run: async(client, message, args) =>{
        const ticker = args[0].toUpperCase();
        const Discord = require('discord.js'); 
        const pfp = `https://i.imgur.com/8yAwoai.png` 
        const sd = require('yahoo-stock-prices')
        const sa = await sd.getCurrentData(ticker);
        console.log(ticker)
        // message.channel.send(`The current price for ${ticker} is $${sa.price}`)
        const stockembed = new Discord.MessageEmbed()
            .setTitle('Stock Info')
            .setColor('#636261')
            .setFooter('Embox Bot * made by shiba#2254',pfp)
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