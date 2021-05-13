const Discord = require(`discord.js`);

module.exports = {
    name: 'unban',
    description: 'unbans a user from a guild.',
    cooldown: 2,
    guildOnly: true,
    run: async(client, message, args) =>{
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You do not the permission to do this!");
        const guild = message.guild
        const bannedMember = message.guild.members.cache.get(args[0]) // Get the `member` property instead to recall later.
        const userID = args.includes('<@!') ? args.replace('<@!', '').replace('>', '')
        : args.includes('<@') ? args.replace('<@', '').replace('<', '') : '';
        const id = '<@4608164XXX93150209>';
        const user = message.mentions.users.first();
        const target = message.mentions.members.first()
        const member = message.guild.members.resolve(user);
        if(!args[1] == !bannedMember){
            const unbanerror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Please mention someone to unban")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(unbanerror)
        }

    if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I cannot unban this member! Ensure I have the right permissions and/or heirachy!');

    if (!bannedMember) return message.channel.send('This user is not banned!');
    
    await guild.members.unban(bannedMember)

    message.channel.send(`${bannedMember} has been unbanned by ${message.author}`)
}}