const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
const Shibe = require('shibe.online');
const db = require('quick.db');

module.exports = {
    name: 'shiba',
    aliases: 'shibe',
    description: "Displays shiba images",
    guildOnly: true,
    cooldown: 2,
    run: async (client, message, args) => {

        db.add('times.shiba', 1); 
        const timesUsed = db.get('times.shiba');

        (async () => {
            async function shibaimg() {
                const img = await Shibe.getShibe();
                console.log(img); // https://cdn.shibe.online/shibes/abc.jpg
                const shibeimage = new Discord.MessageEmbed()
                .setDescription(`:dog:`)
                .setColor("#add8e6")
                .setFooter(`${timesUsed} uses`)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setImage(img)
                shibaimgawait = await message.channel.send('Searching...');
                setTimeout(() => {
                    shibaimgawait.edit(':dog: Found one!',shibeimage);
                  }, 500);
    
                }
                return shibaimg()

            
        })();
        
        Shibe.getShibe(3).then((a) => {
            console.log(a); // ['https://cdn.shibe.online/shibes/def.jpg', 'https://cdn.shibe.online/shibes/ghi.jpg', 'https://cdn.shibe.online/shibes/jkl.jpg']
        });
}}