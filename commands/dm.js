const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'dm',
    description: 'dm',
    run: async(client, message, args) =>{
        
        if (message.author.id != "564135243225759752"){
            return message.channel.send('Only Embox can use this')
        }

        const sender = args[0]
        const dmmessage = args.splice(1).join(' ');
       
       client.users.fetch(`${sender}`, false).then((user) => {
        user.send(`${dmmessage}`);
        });
    }}