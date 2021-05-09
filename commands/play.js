const Discord = require('discord.js');
const pfp = `https://i.imgur.com/8yAwoai.png`


module.exports = {
    name: 'play',
    description: "plays",
    run: async (client, message, args) => {
        const fs = require('fs');
        const ytdl = require('ytdl-core');
        const yts = require( 'yt-search' )
        global.query = args.join(" ")
        console.log(query);

        if(!query){
            message.channel.send('Error')
            return;
        }

        if(queries.length == 0){
            queries.push(query)
            music(query)
        }

        
        else{
            queries.push(query)
        }

        function music(abc){
            yts(abc)
              .then(function(jsonData){
                if(message.member.voice.channel!=null){
                    message.member.voice.channel.join().then(connection=>{
                        var duration = 'jsonData.all[0].duration.seconds';
                        var songs = `https://www.youtube.com/watch?v=${jsonData.all[0].videoId}`
                        const pics = jsonData.all[0].thumbnail
                        connection.play(ytdl(songs,{filter:"audioonly", quality: 'highestaudio' }))
                        setTimeout(function(){
                            console.log(duration)
                            queries.shift()
                            if(queries[0]){
                                music(queries[0])
                            }
                            console.log(queries)
                        },duration*1000)
                    })
                }
            })
        
        
        }
        music(query); 
    }
}
