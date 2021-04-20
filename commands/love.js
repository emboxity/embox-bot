const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'love',
    description: 'random cat image',
    run: async(client, message, args) =>{
        const target=message.mentions.members.first()
        const random = Math.floor(Math.random()*100)
        const love1 = message.author
        const love2 = args[0]
        const love3 = args[1]

        if (!args[0]) {
            const loveerror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Incorrect usage! +love (target)")
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            message.channel.send(loveerror);
        }
        
        if (target) {
            const partnerlol = new Discord.MessageEmbed()
            .setTitle("Love meter 6000 :two_hearts_")
            .setDescription(`${love2} ${love3}
            ${random}%`)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            message.channel.send(partnerlol);

        }


        const tenlove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const twentylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            
            const thirtylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
 

            
            const fourtylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const fiftylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const sixtylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const seventylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const eightylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const nintylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            
            const fulllove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :heart:  :heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())

            if(random <= 10){
                message.channel.send(tenlove)
            }
    
            if(random <= 20){
                message.channel.send(twentylove)
            }
    
    
            if(random <= 30){
                message.channel.send(thirtylove)
            }

            if(random <= 40){
                message.channel.send(fourtylove)
            }

            if(random <= 50){
                message.channel.send(fiftylove)
            }

            if(random <= 60){
                message.channel.send(sixtylove)
            }

            if(random <= 70){
                message.channel.send(seventylove)
            }

            if(random <= 80){
                message.channel.send(eightylove)
            }

            if(random <= 90){
                message.channel.send(nintylove)
            }

            if(random === 100){
                message.channel.send(fulllove)
            }
    
    
    
            return;
    
            }


}
