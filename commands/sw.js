module.exports = {
    name:"simwelcome",
    aliases: ['sim'],
    desscription: "plays music in a voice channel.",
    guildOnly: true,
    run: (client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not the permission to do this!");
        message.channel.send('Simulated a member joining!')
        client.emit('guildMemberAdd', message.member)


    }

}