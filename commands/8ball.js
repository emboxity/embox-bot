const Discord = require('discord.js');

require('discord-reply');
module.exports = {
    name: '8ball',
    description: "Gives an 8ball generated response to a question",
    cooldown: 2,
    guildOnly: true,
    run: async (client, message, args) => {

        if (!args[0]){
            return message.channel.send('You forgot to ask a question!')
        }

        var ballresultslol = [`
        :8ball: It is certain.`,
        `:8ball: It is decidedly so.`,
        `:8ball: Without a doubt.`,
        `:8ball: Yes – definitely.`,
        `:8ball: You may rely on it.`,
        `:8ball: As I see it, yes.`,
        `:8ball: Most likely.`,
        `:8ball: Outlook good.`,
        `:8ball: Yes.`,
       `:8ball: Signs point to yes.`,
       `:8ball: Reply hazy, try again.`,
       `:8ball: Ask again later.`,
       `:8ball: Better not tell you now.`,
       `:8ball: Cannot predict now.`,
       `:8ball: Concentrate and ask again.`,
       `:8ball: Don't count on it.`,
       `:8ball: My reply is no.`,
       `:8ball: My sources say no.`,
       `:8ball: Outlook not so good.`,
       `:8ball: Very doubtful.`];

       var ballresults = Math.floor((Math.random() * ballresultslol.length));

       message.lineReply(`${ballresultslol[ballresults]}`)

    }}