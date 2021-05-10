const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`
module.exports = {
    name: 'kick',
    description: 'Kicks a user from a guild.',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You do not the permission to do this!");
        const user = message.mentions.users.first();
        const target=message.mentions.members.first()
        const member = message.guild.members.resolve(user);
        if(!args[1] == !target){
            const kickerror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Please mention someone to kick")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            return message.channel.send(kickerror)
        }
    if (!target.kickable) return message.channel.send('I cannot kick this member! Ensure I have the right permissions and/or heirachy!');

    target.send('you have been kicked!'); 
    
    await target.kick();

    message.channel.send(`${target} has been kicked by ${message.author}`)
}}