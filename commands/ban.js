const Discord = require(`discord.js`);

module.exports = {
    name: 'ban',
    description: 'bans a user from a guild.',
    cooldown: 1.5,
    guildOnly: true,
    run: async(client, message, args) =>{
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You do not the permission to do this!");
        const user = message.mentions.users.first();
        const target=message.mentions.members.first()
        const member = message.guild.members.resolve(user);
        if(!args[1] == !target){
            const banerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention someone to ban")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(banerror)
        }
    
    if (!target.bannable) return message.channel.send('I cannot ban this member! Ensure I have the right permissions and/or heirachy!');

    target.send('you have been banned!'); 
    
    await target.ban();

    message.channel.send(`${target} has been banned by ${message.author}`)
}}