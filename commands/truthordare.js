const Discord = require('discord.js');

const db = require('quick.db');
module.exports = {
    name: 'truthordare',
    aliases: 'tod',
    description: "Shows MS of a user",
    guildOnly: true,
    run: async (client, message, args) => {

        db.add('times.truthordare', 1); 
        const timesUsed = db.get('times.truthordare');

        if(args[0]){
            const toderror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage! +truthordare")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(toderror)
        }
            const todreact = new Discord.MessageEmbed()
            .setDescription("React with :shushing_face: for truth, and react with :japanese_goblin: for a dare.")
            .setColor("#add8e6")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            
        const reactionmessage =  await message.channel.send(todreact)
    
        try{
            await reactionmessage.react("🤫")
            await reactionmessage.react("👺")
        }
        catch (err) {
            message.channel.send("Error sending emojis! Ensure I have the correct permissions!");
            throw err;
            }

            const truths = [
                `If you could be invisible, what is the first thing you would do?`,
                `What is a secret you kept from your parents?`,
                `What is the most embarrassing music you listen to?`,
                `What is one thing you wish you could change about yourself?`,
                `Who is your secret crush?`,
                `Who is the last person you creeped on social media?`,
                `When was the last time you wet the bed?`,
                `If a genie granted you three wishes, what would you ask for?`,
                `Where is the weirdest place you've ever gone to the bathroom?`,
                `What is the most food you've ever eaten in a single sitting?`,
                `What excuse have you used before to get out plans with a friend?`,
                ];

                const dares = [
                    `Show the most embarrassing photo on your phone.`,
                    `Show the last five people you texted and what the messages said.`,
                    `Eat a raw piece of garlic.`,
                    `Keep three ice cubes in your mouth until they melt.`,
                    `Yell out the first word that comes to your mind.`,
                    `Eat a spoonful of mustard.`,
                    `Remove four items of clothing.`,
                    `Send a text to the last person in your phonebook.`,
                    `Eat a snack without using your hands.`,
                    `Try to put your whole fist in your mouth.`,
                    `Howl like a wolf for two minutes.`,
                    `Put as many snacks into your mouth at once as you can.`,
                    ];


            const collector = reactionmessage.createReactionCollector(
                (reaction, user) => user.id === message.author.id
              );
              collector.on("collect", (reaction, user) => {
                switch (reaction.emoji.name) {
                  case "🤫":
                    async function truth() {
                    const truthlol = new Discord.MessageEmbed()
                    .setDescription(`:hushing_face:`)
                    .setColor(message.member.displayHexColor)
                    .setFooter(`${timesUsed} uses`)
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setDescription(`${truths[Math.floor(Math.random() * truths.length)]}`)
                    truthawait = await message.channel.send('Thinking of something to tell you...');
                    setTimeout(() => {
                        truthawait.edit(`Got one.`,truthlol);
                      }, 500);
                    reaction.message.delete()
        
                    }
                    return truth()
        
        
                  case "👺":
                    async function dare() {
                    const darelol = new Discord.MessageEmbed()
                    .setDescription(`:japanese_goblin:`)
                    .setColor(message.member.displayHexColor)
                    .setFooter(`${timesUsed} uses`)
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setDescription(`${dares[Math.floor(Math.random() * dares.length)]}`)
                    dareawait = await message.channel.send('Thinking of something to tell you...');
                    setTimeout(() => {
                        dareawait.edit(`Got one.`, darelol);
                      }, 500);
                    reaction.message.delete()
                }
                return dare();
              }
    


        })
    }}