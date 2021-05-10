const Discord = require(`discord.js`);
const client = new Discord.Client();
client.cooldowns = new Discord.Collection();

require("dotenv").config()

globalThis.queries = []

const fs = require('fs');

const Enmap = require("enmap");
const myEnmap = new Enmap();

welcomechannel = new Enmap({ name: "welcomechannel" });


const prefix = '+'


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const fetch = require('node-fetch');


const sd = require('yahoo-stock-prices')

const pfp = `https://i.imgur.com/8yAwoai.png`

const Weather = require('weather');
const { fileURLToPath } = require('url');
const price = require('./commands/price');
const { time } = require("console");

client.on('ready', () =>{
    console.log('Embox is Online!')
    function setStatus () {

        client.user.setPresence({
            status: "idle",
            activity: {
                name: `${client.guilds.cache.size} servers! | 🔨👷`,
                type: 'WATCHING',
            }
        });

    };

    setStatus();
    setInterval(() => setStatus(), 3600000);    

    // function timeSince(date) {
    //     const ms = Math.floor(new Date() - date)
    
    //     const days = Math.floor(ms / (24 * 60 * 60 * 1000))
    //     const daysms = ms % (24 * 60 * 60 * 1000)
    //     const hours = Math.floor(daysms / (60 * 60 * 1000))
    //     const hoursms = ms % (60 * 60 * 1000)
    //     const minutes = Math.floor(hoursms / (60 * 1000))
    //     const minutesms = ms % (60 * 1000)
    //     const sec = Math.floor(minutesms / 1000)
    
    //     const output = ""
    
    //     if (days > 0) {
    //         output = output + days + "d "
    //     }
    
    //     if (hours > 0) {
    //         output = output + hours + "h "
    //     }
    
    //     if (minutes > 0) {
    //         output = output + minutes + "m "
    //     }
    
    //     if (sec > 0) {
    //         output = output + sec + "s"
    //     } else if (output != "") {
    //         output = output.substr(0, output.length - 1)
    //     }
    
    //     if (output == "") {
    //         output = "0s"
    //     }
    
    //     return output
    // }
    // 
    // const created = new Date(createdTimestamp)
        
        client.on('guildMemberAdd', async newMember => {
            const { guild } = newMember
            const channel = client.channels.cache.get(welcomechannel.get(guild.id))
            
                const msgEmbed = new Discord.MessageEmbed()
                .setDescription(`${newMember} Welcome to ${guild}!`)
                .setColor("#00000")
                .setFooter(`Member #${guild.memberCount}`)
                .setTimestamp()

                channel.send(msgEmbed)
                newMember.send(`Welcome to ${guild}. I hope you enjoy your time here!`); 

                
            
        })

        



client.on('message', message => {

    

    if(message.channel.type === 'dm') {
        const channel = client.channels.cache.get('839255110310953053')
        const emb = new Discord.MessageEmbed()
        .setTitle(`New Private Message Sent by ${message.author.tag}!`)
        .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
        .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({ dynamic: true})}`)
        .setDescription(`${message.content}`)
        .setTimestamp()
        channel.send(emb)

    }
    
        const moosg = message.content.toLowerCase()
        switch(moosg){
    

        case "ping":
            message.channel.send('Pong!')
        break;

        case "mtv":
            message.channel.send('ghosted')
        break;
    
        case "apurv":
            message.channel.send('kappa')
        break;
    
        case "kys":
            message.channel.send('**in game**')
        break;    
    
         case "simi":
            message.channel.send('https://cdn.discordapp.com/attachments/667540944433840158/830896880980328508/UhHIDLUG6ImH_h1q.mp4')
        break;
    
        case "bigcdg":
            message.channel.send('https://tenor.com/view/english-bodybuilders-fitness-fit-muscle-men-muscular-gif-16976467')
        break;
    
        case "step bro":
            message.channel.send('im stuck')
        break;
    
        case "nathan":
            message.channel.send('https://tenor.com/view/buzz-lightyear-no-sign-of-intelligent-life-dumb-toy-story-gif-11489315')
        break;
    
    }


    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();



    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    const { cooldowns } = client;
    
    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }
    
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Discord.Collection());
        }



        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;

        

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
            }
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
        
    try{
        command.run(message.client, message, args);
    } catch (error){
        console.error(error);
        console.log(price)
        message.reply('There was an error trying to execute this command')
    } 

    

    
    if (message.author.bot || !message.guild) return;
    console.log('1');
    if (!message.content.startsWith(prefix)) return;
    console.log('2');
    const args2 = message.content.slice(prefix.length).split(" ");
    
            

    if (command === 'price') {
        if(args2 == ""){
            const errorembed = new Discord.MessageEmbed()
            .setDescription(":no_entry_sign: Incorrect usage. +price (stock)")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            message.channel.send(errorembed)
            return
    }
        console.log('3');
    }



});

})

client.login(processes.ENV.DISCORD_TOKEN)

