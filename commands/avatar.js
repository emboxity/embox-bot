const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
module.exports = {
    name: 'avatar',
    description: "grabs an avatar for a user",
    aliases: 'av',
    cooldown: 2.5,
    guildOnly: true,
    run: async(client, message, args) => {




        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.cache.get(mention);
            }
        }

        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                const averror = new Discord.MessageEmbed()
                .setDescription(":no_entry_sign: Incorrect usage! +avatar (user), or +avatar")
                .setColor("#ff6961")
                .setFooter('Embox Bot * made by shiba#2254',pfp)

                return message.reply(averror);
            }


            const avuser = new Discord.MessageEmbed()
            .setDescription(`${user.username}'s avatar:`)
            .setColor("#77dd77")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setImage(`${user.displayAvatarURL({ dynamic: true, size:2048 })}`)
            return message.channel.send(avuser);
        }

        const avself = new Discord.MessageEmbed()
        .setDescription(`${message.author.username}, your avatar:`)
        .setColor("#77dd77")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setImage(`${message.author.displayAvatarURL({ dynamic: true, size:2048 })}`)
        return message.channel.send(avself);
    }}
        
    

        
    


