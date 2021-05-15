const Discord = require('discord.js');


module.exports = {
    name: 'dm',
    description: 'dm',
    cooldown: 0.01,
    guildOnly: true,
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