const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`
const fetch = require('node-fetch');
module.exports = {
    name: 'cat',
    description: 'random cat image',
    run: async(client, message, args) =>{
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        if(!args[0] == ''){
            const caterror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Incorrect usage! +cat :cat:")
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            return message.channel.send(caterror)
        }
        const cat = new Discord.MessageEmbed()
        .setDescription(`:cat:`)
        .setColor("#add8e6")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setImage(`${file}`)
        msg = await message.channel.send('Searching...');
        setTimeout(() => {
            msg.edit(':cat: Found one!',cat);
          }, 500);

    }
}