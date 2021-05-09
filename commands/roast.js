const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`
const db = require('quick.db');
module.exports = {
    name: 'roast',
    description: "roasts someone",
    run: async (client, message, args) => {
        
        db.add('times.roast', 1); 
        const timesUsed = db.get('times.roast');

        const roasterror = new Discord.MessageEmbed()
        .setDescription(":no_entry_sign: Incorrect usage! +roast (target) :fire:")
        .setColor("#ff0808")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        const target = message.mentions.members.first();

        if (!target) return message.channel.send(roasterror);

        if(target.id === message.author.id){
            const roasturself = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: You cannot roast yourself.")
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            return message.channel.send(roasturself);
        }

        const roasts = [
        `looks like some kind of interesting vegetable that you only find in Asian markets`,
        `is so fat, so fat thet they got baptized at sea world`,
        `, a woman endured 9 months of pregnancy, woke up many nights to feed you, tax dollars were spent on an education; food and housing were consumed by you while others went without, and after all of this, your contribution to humanity is little to nothing`,
        `has been disowned for having a yee-yee ass haircut`,
        `maybe if you got rid of that yee-yee ass haircut, you would have some bitches on your dick`,
        `fantasizes to furry porn`,
        `looks like that person, the person who gets no hoes`,
        `looks like everyone you befriend on socials unfollows you almost immediately`,
        `is a teachers pet`,
        `sits reverse cowboy on the toilet just so they have a flat surface to eat off of`,
        `should be the posterperson for birth control`,
        `should probably consider getting their fatass off the computer`,
        ];


        const tips = [0.01, 0.03, 0.05, 0.07, 0.09, 0.11, 0.13, 0.15, 0.17, 0.19, 0.21, 0.23, 0.25, 0.27, 0.29, 0.31, 0.33, 0.35, 0.37, 0.39, 0.41, 0.43, 0.45, 0.47,0.49, 0.51, 0.53, 0.55, 0.57, 0.59, 0.61, 0.63, 0.65, 0.67, 0.69, 0.71, 0.73, 0.75, 0.77, 0.79, 0.81, 0.83, 0.85, 0.87, 0.89, 0.91, 0.93, 0.95, 0.97, 0.99,]

        var tip = Math.floor(Math.random() * tips.length)

        const roastlol = new Discord.MessageEmbed()
        .setColor('#000000')
        .setFooter(`${timesUsed} uses`)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`${target} ${roasts[Math.floor(Math.random() * roasts.length)]}, no coming back from that one :fire:`)
        message.channel.send(roastlol)
        

        if(tips[tip] === 0.79) {
            message.channel.send('Tip, use +help for help!')
        }
    
    }
};