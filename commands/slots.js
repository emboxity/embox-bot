const Discord = require('discord.js');

module.exports = {
    name: 'slots',
    description: 'Spin a slotwheel for absolutely nothing!',
    cooldown: 2,
    guildOnly: true,
    run: async (client, message, args) => {
        
        var slots = [":cherries:", ":pear:", ":strawberry:"];
        var result1 = Math.floor((Math.random() * slots.length));
        var result2 = Math.floor((Math.random() * slots.length));
        var result3 = Math.floor((Math.random() * slots.length));


        if(args[0]){
            const sloterror = new Discord.MessageEmbed()
            .setDescription("\<:x_:842221675775787019> Were you trying to use +slots?.")
            .setColor("#ff6961")
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            return message.channel.send(sloterror);
        }

        if (result1 === result2 && result1 === result3) {
            slotwinnerawait = await message.channel.send('Spinning the slot wheel... Good luck! :slot_machine: ');
            setTimeout(() => {
            const slotwinner = new Discord.MessageEmbed()
            .setTitle(':slot_machine: Slots :slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setDescription('You won!')
            .setColor(message.member.displayHexColor)
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            message.channel.send(slotwinner);
            slotwinnerawait.delete()

              }, 500);
        
        }   else {
            slotloserlol = await message.channel.send('Spinning the slot wheel... Good luck! :slot_machine: ');
            setTimeout(() => {
            const slotloser = new Discord.MessageEmbed()
            .setTitle(':slot_machine: Slots :slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setDescription('You lost!')
            .setColor(message.member.displayHexColor)
            .setFooter('Embox Bot * made by shiba#2254',client.user.displayAvatarURL())
            .setAuthor(message.author.username, message.author.displayAvatarURL())
          
            message.channel.send(slotloser);
            slotloserlol.delete()

        }, 500);

        }

    }}