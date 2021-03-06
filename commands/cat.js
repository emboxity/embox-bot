const Discord = require(`discord.js`);

const fetch = require('node-fetch');
module.exports = {
    name: 'cat',
    description: 'random cat image',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        if(!args[0] == ''){
            const caterror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Incorrect usage! +cat")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(caterror)
        }
        const cat = new Discord.MessageEmbed()
        .setDescription(`:cat:`)
        .setColor("#add8e6")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setImage(`${file}`)
        msg = await message.channel.send('Searching...');
        setTimeout(() => {
            msg.edit(':cat: Found one!',cat);
          }, 500);

    }
}