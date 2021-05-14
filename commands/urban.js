const fetch=require("node-fetch")
const querystring = require('querystring');
const Discord = require(`discord.js`);

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
module.exports = {
    name: 'urban',
    aliases: 'define',
    description: "Defines a word with urban Dictionary",
    cooldown: 2,
    guildOnly: true,
    run: async (client, message, args) => {
        if (!args[0]){
            return message.channel.send('You need to add a word to define!');
        }
        const query = querystring.stringify({ term: args.join(' ') });
        const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        if (!list.length) {
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }
        
        const [answer] = list;
        const urbanembed = new Discord.MessageEmbed()
        .setTitle(`Definition of ${answer.word}`)
        .setColor('#636261')
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { name: 'Definition', value: trim(answer.definition, 1024) },
            { name: 'Example', value: trim(answer.example, 1024) },
            { name: 'Likes', value: `${answer.thumbs_up} :+1:` },
            { name: 'Dislikes', value: `${answer.thumbs_down} :-1:`},
        );
        message.channel.send(urbanembed)
    }}