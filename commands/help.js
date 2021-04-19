const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`

module.exports = {
    name: 'help',
    aliases: 'help',
    description: 'help',
    run: async(client, message, args) =>{
        if(args [0] == 'price'){
            const helpprice = new Discord.MessageEmbed()
            .setTitle('Command: +price')
            .setColor('#000000')
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`Requested by ${message.author}`)
            .addFields(
                { 
                    name: `Description:`,
                    value: `
                    Displays the current stock price of a current ticker.
                    
                    **Usage:**
                    +price (ticker)
                    +price AAPL`,
                  },
            )
            message.channel.send(helpprice)

        }

            if(args [0] == 'avatar'){
                const helpavatar = new Discord.MessageEmbed()
                .setTitle('Command: +avatar')
                .setColor('#000000')
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Requested by ${message.author}`)
                .addFields(
                    { 
                        name: `Description:`,
                        value: `
                        Displays the avatar of a user.
                        
                        **Usage:**
                        +avatar
                        +avatar (target)
                        +avatar @shiba#2254`,
                      },
                )
                message.channel.send(helpavatar)
            }

            if(args [0] == 'kill'){
                const helpkill = new Discord.MessageEmbed()
                .setTitle('Command: +kill')
                .setColor('#000000')
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Requested by ${message.author}`)
                .addFields(
                    { 
                        name: `Description:`,
                        value: `
                        Kills someone. :skull:
                        
                        **Usage:**
                        +kill (target)
                        +kill @shiba#2254`,
                      },
                )
                message.channel.send(helpkill)
            }
            if(args [0] == 'mute'){
                const helpmute = new Discord.MessageEmbed()
                .setTitle('Command: +mute')
                .setColor('#000000')
                .setFooter('Embox Bot * made by shiba#2254',pfp)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Requested by ${message.author}`)
                .addFields(
                    { 
                        name: `Description:`,
                        value: `
                        Mutes someone permanately. If you want to temporarily mute someone, use +tempmute
                        
                        **Usage:**
                        +mute (target)
                        +mute @shiba#2254
                        +mute @shiba#2254 Get out!`,
                      },
                )
                message.channel.send(helpmute)
        }
        if(args [0] == 'nuke'){
            const helpnuke = new Discord.MessageEmbed()
            .setTitle('Command: +nuke')
            .setColor('#000000')
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`Requested by ${message.author}`)
            .addFields(
                { 
                    name: `Description:`,
                    value: `
                    Clears all messages in a channel. :volcano:
                    
                    **Usage:**
                    +nuke (reason)
                    +nuke Clearing the chat!`,
                  },
            )
            message.channel.send(helpnuke)
       }
       if(args [0] == 'purge'){
        const helppurge = new Discord.MessageEmbed()
        .setTitle('Command: +purge')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              this clears a specified amount of messages
              
              **Usage:**
              +purge (number)
              +purge 50`,
            },
        )
        message.channel.send(helppurge)
    }
    if(!args[0]){
        const helphelp = new Discord.MessageEmbed()
        .setDescription("Please use +help (command) for more information.")
        .setColor("#000000")
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        message.channel.send(helphelp)
        
       
    }
    if(args [0] == 'weather'){
        const weatherhelp = new Discord.MessageEmbed()
        .setTitle('Command: +weather')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Gives weather data for a given location
              
              **Usage:**
              +weather (location)
              +weather Hartford, Connecticut`,
            },
        )
        message.channel.send(weatherhelp)
    }
    if(args [0] == 'softnuke'){
        const softnukehelp = new Discord.MessageEmbed()
        .setTitle('Command: +softnuke')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Clears 200 messages. :volcano:
              
              **Usage:**
              +softnuke (reason)
              +softnuke Excessive spam in chat!`,
            },
        )
        message.channel.send(softnukehelp)
    }
    if(args [0] == 'stfu'){
        const stfuhelp = new Discord.MessageEmbed()
        .setTitle('Command: +stfu')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Tells a user to stfu.
              
              **Usage:**
              +stfu (target)
              +stfu @shiba#2254`,
            },
        )
        message.channel.send(stfuhelp)
    }
    if(args [0] == 'unmute'){
        const unmutehelp = new Discord.MessageEmbed()
        .setTitle('Command: +unmute')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Unmutes a user.
              
              **Usage:**
              +unmute (target)
              +unmute @shiba#2254`,
            },
        )
        message.channel.send(unmutehelp)
    }

    if(args [0] == 'dog'){
        const doghelp = new Discord.MessageEmbed()
        .setTitle('Command: +dog')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Displays a random photo/gif of a dog.
              
              **Usage:**
              +dog`
            },
        )
        message.channel.send(doghelp)
    }
    if(args [0] == 'cat'){
        const cathelp = new Discord.MessageEmbed()
        .setTitle('Command: +cat')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Displays a random photo/gif of a cat.
              
              **Usage:**
              +cat`
            },
        )
        message.channel.send(cathelp)
    }
    if(args [0] == 'bunny'){
        const bunnyhelp = new Discord.MessageEmbed()
        .setTitle('Command: +bunny')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Displays a random photo/gif of a bunny.
              
              **Usage:**
              +bunny`
            },
        )
        message.channel.send(bunnyhelp)
    }
    if(args [0] == 'ban'){
        const banhelp = new Discord.MessageEmbed()
        .setTitle('Command: +banhelp')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Bans a user from a guild.
              
              **Usage:**
              +ban (target)
              +ban @shiba#2254`,
            },
        )
        message.channel.send(banhelp)
    }
    if(args [0] == 'kick'){
        const kickhelp = new Discord.MessageEmbed()
        .setTitle('Command: +kick')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Kicks a user from a guild.
              
              **Usage:**
              +kick (target)
              +kick @shiba#2254`,
            },
        )
        message.channel.send(kickhelp)
    }
    if(args [0] == 'beattheshitoutof'){
        const beathelp = new Discord.MessageEmbed()
        .setTitle('Command: +beattheshitoutof')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Beats someone the fuck up.
              
              **Usage:**
              +beattheshitoutof (target)
              +beattheshitoutof @shiba#2254`,
            },
        )
        message.channel.send(beathelp)
    }
    if(args [0] == 'urban'){
        const urbanhelp = new Discord.MessageEmbed()
        .setTitle('Command: +urban')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Defines a word from the Urban Dictionary.
              
              **Usage:**
              +urban (term)
              +urban Emboxity`,
            },
        )
        message.channel.send(urbanhelp)
    }
    if(args [0] == 'define'){
        const definehelp = new Discord.MessageEmbed()
        .setTitle('Command: +define')
        .setColor('#000000')
        .setFooter('Embox Bot * made by shiba#2254',pfp)
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`Requested by ${message.author}`)
        .addFields(
            { 
              name: `Description:`,
              value: `
              Defines a word from the Urban Dictionary.
              
              **Usage:**
              +urban (term)
              +urban Emboxity`,
            },
        )
        message.channel.send(definehelp)
} 
}
}   