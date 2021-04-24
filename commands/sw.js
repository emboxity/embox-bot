module.exports = {
    name:"simwelcome",
    aliases: ['sw'],
    desscription: "Simulates a welcome",

    run: (client, message, args) => {
        message.channel.send('Simulated a member joining!')
        client.emit('guildMemberAdd', message.member)


    }

}
