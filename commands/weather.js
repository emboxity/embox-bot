const Discord = require('discord.js');
const { Guild } = require("discord.js");
const pfp = `https://i.imgur.com/8yAwoai.png`


module.exports = {
  name: 'weather',
  aliases: 'weatherinfo ',
  description: 'Displays weather information on demand,',
  cooldown: 2,
  run: (client, message, args) => {
  const Discord = require('discord.js');   
  const NodeGeocoder = require('node-geocoder');
  var weather = require('weather-js')
   
  const geocoder = NodeGeocoder({
    provider: 'opencage',
    apiKey: '4af408a07f464a43be5e12811d7c8b45'
  });


  if (!args[0]){
    const weathererror = new Discord.MessageEmbed()
    .setDescription(":no_entry_sign: Incorrect usage! +weather (location).")
    .setColor("#ff0808")
    .setFooter('Embox Bot * made by shiba#2254',pfp)
    return message.channel.send(weathererror);
  }
  
  // Using callback
  geocoder.geocode(args, function(err, res) {
    const lat = res[0].latitude;
    const long = res[0].longitude;
    weather.find({search: `${lat}, ${long}`, degreeType: 'F'}, function(err, result) {
      if(err) console.log(err);
     
      console.log(JSON.stringify(result[0].current.temperature));
      const name = result[0].location.name
      const temperature = result[0].current.temperature
      const pfp = `https://i.imgur.com/8yAwoai.png`
      const imageURL = result[0].current.imageUrl
      const weatherembed = new Discord.MessageEmbed()
            .setTitle('Weather Info')
            .setColor('#3889eb')
            .setThumbnail(imageURL)
            .setFooter('Embox Bot * made by shiba#2254',pfp)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`Requested by ${message.author}`)
            .addFields(
                {
                  name: `${name}`,
                  value: `${temperature}°F`,
                },
            )
            message.channel.send(weatherembed)
    })
  });
    }}
