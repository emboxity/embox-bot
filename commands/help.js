const prefix = '+'
const Discord = require(`discord.js`);
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: 'info',
	usage: '[command name]',
    guildOnly: true,
	cooldown: 2.5,
    run: async(client, message, args) =>{
	
    
        const data = [];
		const { commands } = message.client;

        if (!args.length) {
            const dminfo = new Discord.MessageEmbed()
            .setTitle(":white_check_mark: Here\'s a list of all my commands:")
            .setDescription((commands.map(command => command.name).join(', ')))
            .setColor("#77dd77")
            .setFooter(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command! | Embox Bot * made by shiba#2254`,client.user.displayAvatarURL())
           


            data.push(dminfo);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    const candm = new Discord.MessageEmbed()
                    .setDescription(":white_check_mark: I\'ve sent you a DM with all my commands!")
                    .setColor("#77dd77")
                    .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
                    message.reply(candm);
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    const cantdm = new Discord.MessageEmbed()
                    .setDescription(":no_entry_sign: it seems like I can\'t DM you! Do you have DMs disabled?")
                    .setColor("#ff6961")
                    .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
                    message.reply(cantdm);
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            const helperror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: That\'s not a valid command!")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.reply(helperror);
        }



      
        const helpinfo = new Discord.MessageEmbed()
        .setTitle(`Command: ${command.name}`)
        .setDescription(`**Description:** ${command.description}`)
        .setColor("#00000")
        .addFields(
            {name: `Aliases:`, value: `${command.aliases ? command.aliases.join(', ') || 'No Aliases' : 'No Aliases'}`},
            {name: `**Cooldown (seconds):**`, value: `${command.cooldown || 'No Cooldown.'}`},
            
        )
        .setFooter(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command! | Embox Bot * made by shiba#2254`,client.user.displayAvatarURL())
        message.channel.send(helpinfo)

        
	},
};