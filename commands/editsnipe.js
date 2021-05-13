const Discord = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'editsnipe',
    aliases: [],
    description: 'Shows the last deleted message when used in a specified channel.',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) => {

    client.on("messageUpdate", function(oldMessage, newMessage){
        console.log(`${oldMessage} -> ${newMessage}`)

			client.edits = new Map()
	
			client.edits.set(newMessage.channel.id, {

				author: newMessage.author,
                old: oldMessage,
                new1: newMessage
			})
    })


            if(!client.edits?.get){
                const amogus = new Discord.MessageEmbed()
                .setDescription("\<:x_:842221675775787019> No message to editsnipe!")
                .setColor("#ff6961")
                .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
    
                return message.reply(amogus)
             
            } 


            const editsnipe = client.edits.get(message.channel.id);

        
        

    

    

        const snipeembed = new Discord.MessageEmbed()
        .setDescription(`${editsnipe.old} --> ${editsnipe.new1}`)
        .setColor('77dd77')
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(snipeembed);


        
    }

}

    
        
        

