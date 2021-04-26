require("dotenv").config()

const fs = require('fs');

const Enmap = require("enmap");
const myEnmap = new Enmap();

welcomechannel = new Enmap({ name: "welcomechannel" });

const Discord = require('discord.js');

const prefix = '+'

const client = new Discord.Client();
client.commands=new Discord.Collection();
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
                name: 'with embox | 🔨👷 ',
                type: 'PLAYING',
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
    if(message.content=='ping'){
        message.channel.send('pong')
    }

    

    if(message.content=='mtv'){
        message.channel.send('ghosted')
    }

    if(message.content.startsWith('apurv')){ 
        message.channel.send('kappa')
    }

     if(message.content=='simii'){
        message.channel.send('https://cdn.discordapp.com/attachments/667540944433840158/830896880980328508/UhHIDLUG6ImH_h1q.mp4')
    }

    if(message.content=='bigcdg'){
        message.channel.send('https://tenor.com/view/english-bodybuilders-fitness-fit-muscle-men-muscular-gif-16976467')
    }

    if(message.content=='step bro'){
        message.channel.send('im stuck')
    }

    if(message.content=='nathan'){
        message.channel.send('https://tenor.com/view/buzz-lightyear-no-sign-of-intelligent-life-dumb-toy-story-gif-11489315')
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
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
            .setColor("#ff0808")
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            message.channel.send(errorembed)
            return
    }
        console.log('3');
    }



});

})


