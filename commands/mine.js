const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
const db = require('quick.db');
module.exports = {
    name: 'mine',
    description: "Mining ores",
    run: async (client, message, args) => {

        db.add('times.mine', 1); 
        const timesUsed = db.get('times.mine');
        
        var ores = [":diamond_shape_with_a_dot_inside:", ":diamonds:", ":large_blue_diamond:", ":large_orange_diamond:", ":small_blue_diamond:", ":small_orange_diamond:", "Couldn't find anything of any significant value."];
        var oreResult = Math.floor((Math.random() * ores.length));


        const mineReact = new Discord.MessageEmbed()
        .setDescription(":hammer_pick: We are at the cave. React with :pick: if you are ready to go into the mines, or react with :x: if you don't want to.")
        .setColor("#add8e6")
        .setFooter('Embox Bot * made by shiba#2254',pfp)

        
        const reactionmessage =  await message.channel.send(mineReact)

        try{
            await reactionmessage.react("⛏️")
            await reactionmessage.react("❌")
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
                  case "⛏️":
                    async function formine() {
                    const mineEmbed = new Discord.MessageEmbed()
                    .setTitle(`Mine Results`)
                    .addField('I just came out of the mine.', ores[oreResult])
                    .setColor("#add8e6")
                    .setFooter(`${timesUsed} uses`)
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
            
                    mineAwait = await message.channel.send('Mining... :pick:');
                    setTimeout(() => {
                      mineAwait.edit('Might have found something.',mineEmbed);
                      }, 500);
                    reaction.message.delete()
        
                    }
                    return formine()

                  
        
        
                  case "❌":
                    async function mineAbort() {
                      const minenvm = new Discord.MessageEmbed()
                      .setDescription("Action aborted!")
                      .setColor("#add8e6")
                      .setFooter('Embox Bot * made by shiba#2254',pfp)
                      message.channel.send(minenvm)
                    }
                    reaction.message.delete()
                    return mineAbort()
                
              }
        })}
      } 