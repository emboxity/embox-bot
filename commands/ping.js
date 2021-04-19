const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
module.exports = {
    name: 'ping',
    description: "Shows MS of a user",
    run: async(client, message, args) => {
        message.channel.send("Checking your ping...:ping_pong:").then(m =>{
            const ping = m.createdTimestamp - message.createdTimestamp;
            m.edit(`**:ping_pong: Pong! Your ping is: ${ping}ms**`);
    })
}}
 