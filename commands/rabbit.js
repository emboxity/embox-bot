
const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`
const bunny = require('bunny-img');
module.exports = {
    name: 'bunny',
    aliases: 'rabbit',
    description: 'Shows an image/gif of the bunny on user demand.',
    cooldown: 1,
    guildOnly: true,
    run: async(client, message, args) =>{
      if(!args[0] == ''){
        const bunnyerror = new Discord.MessageEmbed()
        .setDescription(":no_entry_sign: Incorrect usage! +bunny :rabbit:")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        return message.channel.send(bunnyerror)
    }
        const bunnyreact = new Discord.MessageEmbed()
        .setDescription("React with :one: for a image, and react with :two: for a gif.")
        .setColor("#add8e6")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        
    const reactionmessage =  await message.channel.send(bunnyreact)

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
            async function bunnyimg1() {
            const bunnyjpg = new Discord.MessageEmbed()
            .setDescription(`:rabbit:`)
            .setColor("#add8e6")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setImage(`${bunny.getBunnyIMG()}`)
            bunnyimgawait = await message.channel.send('Searching...');
            setTimeout(() => {
              bunnyimgawait.edit(':rabbit: Found one!',bunnyjpg);
              }, 500);
            reaction.message.delete()

            }
            return bunnyimg1()


          case "2️⃣":
            async function bunnygif1() {
            const bunnygif = new Discord.MessageEmbed()
            .setDescription(`:rabbit:`)
            .setColor("#add8e6")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setImage(`${bunny.getBunnyGIF()}`)
            bunnygifawait = await message.channel.send('Searching...');
            setTimeout(() => {
              bunnygifawait.edit(':rabbit: Found one!',bunnygif);
              }, 500);
            reaction.message.delete()
        }
        return bunnygif1();
      }

      })}
}
