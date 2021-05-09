module.exports = {
    name:"idc",
    aliases: ["noc"],
    desscription: "Tells someone that they don't care",
    run: (client, message, args) => {
        message.channel.bulkDelete(1)
        message.channel.send('nobody cares bro')
    }}