const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`


module.exports = {
  name: 'weather',
  aliases: 'weatherinfo ',
  description: '+weatherinfo',
  run: (client, message, args) => {
  const Discord = require('discord.js');   
  const NodeGeocoder = require('node-geocoder');
  var weather = require('weather-js')
   
  const geocoder = NodeGeocoder({
    provider: 'opencage',
    apiKey: '4af408a07f464a43be5e12811d7c8b45'
  });
  
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
