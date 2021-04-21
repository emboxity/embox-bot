const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'servers',
    description: 'Displays what servers the bot is in',
    run: async(client, message, args) =>{
        return message.channel.send(`i am in the following guilds: ${client.guilds.cache.array().map(g => g.name).join(', ')}`);
    }}