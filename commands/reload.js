module.exports = {
    name: 'reload',
    aliases: ['restart', 'rl'],
    description: 'Reloads a command (Only the bot owner can use this!)',
    cooldown: 0.01,
    usage: "-reload (command)",
    run: async (client, message, args) => {
        if (message.member.id != "564135243225759752") return message.channel.send(`Sorry only **Embox** can run this command`);
        if(!args[0]) return message.channel.send('You need to include the name of the command!');

        const command = args[0].toLowerCase();
        try {
            delete require.cache[require.resolve(`../commands/${command}`)]
            client.commands.delete(command);
            const pull = require(`../commands/${command}`);
            client.commands.set(command, pull);

            return message.channel.send(`**You have reloaded the command \`${command}\`** **successfully!**`);
        } catch (error) {
            return message.channel.send(`There was an error trying to reload **${command}**: \`${error.message}\``);
        }
    }
}
