const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'servers',
    aliases: ['guilds'],
    description: 'Displays what servers the bot is in. Only usable by the bot owner!',
    cooldown: 0.01,
    run: async(client, message, args) =>{

        if (message.author.id != "564135243225759752"){
            return message.channel.send('Only Embox can use this')
        }

        return message.channel.send(`i am in the following guilds: ${client.guilds.cache.array().map(g => g.name).join(', ')}`);
    }}