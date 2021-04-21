const Discord = require(`discord.js`);
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'love',
    description: 'gimme love xoxo',
    run: async(client, message, args) =>{
        const target = message.mentions.members.first()
        const random = Math.floor(Math.random()*100)
        const love1 = message.author
        const love2 = args[0]
        const love3 = args[1]
        console.log(random)

        if (!args[0]) {
            const loveerror = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Incorrect usage! +love (love2)")
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            message.channel.send(loveerror);
        }
        
        if (args[1]){

            const nohoes1 = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love2} ${love3}
            ${random}%
            :broken_heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
        
        
            const tenlove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                const twentylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                
                const thirtylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                
                const fourtylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                const fiftylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                const sixtylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :heart:  :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                const seventylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                const eightylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :broken_heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                const nintylove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :heart:  :broken_heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
        
        
                
                const fulllove1 = new Discord.MessageEmbed() 
                .setTitle("Love meter 6000 :two_hearts:")
                .setDescription(`${love2} ${love3}
                ${random}%
                :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :heart:  :heart: `)
                .setColor("#FF6347")
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                
            
        
                if(random <= 10 && random >=0){
                    message.channel.send(nohoes1)
                }
        
                if(random <= 20 && random >= 11){
                    message.channel.send(tenlove1)
                }
        
                if(random <= 30 && random >= 21){
                    message.channel.send(twentylove1)
                }
        
                if(random <= 40 && random >= 31){
                    message.channel.send(thirtylove1)
                }
        
                if(random <= 50 && random >= 41){
                    message.channel.send(fourtylove1)
                }
        
                if(random <= 60 && random >= 51){
                    message.channel.send(fiftylove1)
                }
        
                if(random <= 70 && random >= 61){
                    message.channel.send(sixtylove1)
                }
        
                if(random <= 80 && random >= 71){
                    message.channel.send(seventylove1)
                }
        
                if(random <= 90 && random >= 81){
                    message.channel.send(eightylove1)
                }
        
                if(random <= 100 && random >= 91){
                    message.channel.send(nintylove1)
                }
        
                if(random <= 150 && random >= 101){
                    message.channel.send(fulllove1)
                }
                return;
            }

        if (args[0]){

        const nohoes = new Discord.MessageEmbed() 
        .setTitle("Love meter 6000 :two_hearts:")
        .setDescription(`${love1} ${love2}
        ${random}%
        :broken_heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
        .setColor("#FF6347")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())




        const tenlove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const twentylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            
            const thirtylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
 

            
            const fourtylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const fiftylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const sixtylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const seventylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :broken_heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const eightylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :broken_heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            const nintylove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :heart:  :broken_heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())


            
            const fulllove = new Discord.MessageEmbed() 
            .setTitle("Love meter 6000 :two_hearts:")
            .setDescription(`${love1} ${love2}
            ${random}%
            :heart: :heart: :heart: :heart:  :heart:  :heart:  :heart:  :heart:  :heart:  :heart: `)
            .setColor("#FF6347")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            
        

            if(random <= 10 && random >=0){
                message.channel.send(nohoes)
            }

            if(random <= 20 && random >= 11){
                message.channel.send(tenlove)
            }
    
            if(random <= 30 && random >= 21){
                message.channel.send(twentylove)
            }
    
            if(random <= 40 && random >= 31){
                message.channel.send(thirtylove)
            }

            if(random <= 50 && random >= 41){
                message.channel.send(fourtylove)
            }

            if(random <= 60 && random >= 51){
                message.channel.send(fiftylove)
            }

            if(random <= 70 && random >= 61){
                message.channel.send(sixtylove)
            }

            if(random <= 80 && random >= 71){
                message.channel.send(seventylove)
            }

            if(random <= 90 && random >= 81){
                message.channel.send(eightylove)
            }

            if(random <= 100 && random >= 91){
                message.channel.send(nintylove)
            }

            if(random <= 150 && random >= 101){
                message.channel.send(fulllove)
            }
        }
        
                
            
                    return;
            
                    
            }
    

}
