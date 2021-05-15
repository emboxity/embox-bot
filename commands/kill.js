const Discord = require('discord.js');

module.exports = {
    name: 'kill',
    description: "die",
    guildOnly: true,
    run: async (client, message, args) => {


        const killerror = new Discord.MessageEmbed()
        .setDescription("\<:x_:842221675775787019> Incorrect usage! +kill (target) :skull:")
        .setColor("#ff6961")
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        const target = message.mentions.members.first();

        if (!target) return message.channel.send(killerror);

        const options = [`got beamed`, `got raped`, `got decapitated in a plane crash`, 'was stung by hundreds of wasps',
    'got hit by a coconut','ate themselves to death','got trampled by a cow','got shot','died in their sleep peacfully',
'died in a plane crash','got hit by a golf ball','was buried alive','jumped off a cliff','has developed an allergic reaction to some advil and died',
'burnt in a house fire',`Was eaten by a bear`];
        const kill = new Discord.MessageEmbed()
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`${target} ${options[Math.floor(Math.random() * options.length)]}, may their soul rest in peace. :skull:`)
        message.channel.send(kill)

    
    }
};