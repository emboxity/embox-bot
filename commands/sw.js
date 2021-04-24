module.exports = {
    name:"simwelcome",
    aliases: ['sw'],
    desscription: "plays music in a voice channel.",

    run: (client, message, args) => {
        message.channel.send('Simulated a member joining!')
        client.emit('guildMemberAdd', message.member)


    }

}