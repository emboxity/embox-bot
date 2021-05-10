const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`
const dogImage = require('random-dog-images');
module.exports = {
    name: 'dog',
    description: 'random dog image',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        if(!args[0] == ''){
            const dogerror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Incorrect usage! +dog :dog:")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            return message.channel.send(dogerror)
        }
        async function DogImage() {
            const Image = await dogImage();
            const dog = new Discord.MessageEmbed()
            .setDescription(`:dog:`)
            .setColor("#add8e6")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setImage(`${Image}`)
            dogmsg = await message.channel.send('Searching...');
            setTimeout(() => {
                dogmsg.edit(':dog: Found one!',dog);
              }, 500);
        }
        DogImage();
}}