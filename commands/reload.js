const Discord = require("discord.js");
module.exports = {
    name: 'reload',
    aliases: ['restart', 'rl'],
    description: 'Reloads a command (Only the bot owner can use this!)',
    cooldown: 0.01,
    usage: "+reload (command)",
    guildOnly: true,
    run: async (client, message, args) => {
        if (message.member.id != "564135243225759752"){
            const noPERMSRELOAD = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Sorry only **Embox** can run this command")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

            return message.reply(noPERMSRELOAD)

        } 
        
        if(!args[0]){
            const LripBOZO = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Incorrect usage! +reload (command)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

            return message.reply(LripBOZO)

        } 

        const command = args[0].toLowerCase();
        try {
            delete require.cache[require.resolve(`../commands/${command}`)]
            client.commands.delete(command);
            const pull = require(`../commands/${command}`);
            client.commands.set(command, pull);

            const reloadsuccess = new Discord.MessageEmbed()
            .setDescription(`:white_check_mark: You have reloaded the command \`${command}\`** **successfully!`)
            .setColor("#77dd77")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

            return message.channel.send(reloadsuccess);

        } catch (error) {

            const reloaderror = new Discord.MessageEmbed()
            
            .addFields(
                { name:`:x: There was an error trying to reload **${command}**:`, value: `\`${error.message}\`` },
            )
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())

            return message.channel.send(reloaderror);
        }
    }
}
