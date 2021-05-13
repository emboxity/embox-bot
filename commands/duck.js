const Discord = require('discord.js');

const duck = require('duck-img');
const db = require('quick.db');
module.exports = {
    name: 'duck',
    description: "Shows an image/gif of a duck",
    cooldown: 2,
    guildOnly: true,
    run: async (client, message, args) => {

        db.add('times.duck', 1); 
        const timesUsed = db.get('times.duck');


        if(!args[0] == ''){
            const duckerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage! +duck :duck:")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(duckerror)
        }
            const duckreact = new Discord.MessageEmbed()
            .setDescription("React with :one: for a image, and react with :two: for a gif.")
            .setColor("#add8e6")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            
        const reactionmessage =  await message.channel.send(duckreact)
    
        try{
            await reactionmessage.react("1️⃣")
            await reactionmessage.react("2️⃣")
        }
        catch (err) {
            message.channel.send("Error sending emojis!");
            throw err;
            }
    
            
          const collector = reactionmessage.createReactionCollector(
            (reaction, user) => user.id === message.author.id
          );
          collector.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
              case "1️⃣":
                async function duckimg1() {
                const duckjpg = new Discord.MessageEmbed()
                .setDescription(`:duck:`)
                .setColor("#add8e6")
                .setFooter(`${timesUsed} uses`)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setImage(`${duck.getImg()}`)
                duckimgawait = await message.channel.send('Searching...');
                setTimeout(() => {
                    duckimgawait.edit(':duck: Found one!',duckjpg);
                  }, 500);
                reaction.message.delete()
    
                }
                return duckimg1()
    
    
              case "2️⃣":
                async function duckgif1() {
                const duckgif = new Discord.MessageEmbed()
                .setDescription(`:duck:`)
                .setColor("#add8e6")
                .setFooter(`${timesUsed} uses`)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setImage(`${duck.getGif()}`)
                duckgifawait = await message.channel.send('Searching...');
                setTimeout(() => {
                    duckgifawait.edit(':duck: Found one!',duckgif);
                  }, 500);
                reaction.message.delete()
            }
            return duckgif1();
          }
    
          })}
    }