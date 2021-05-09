module.exports = {
    name: 'meme',
    description: "Finds a random meme from Reddit.",
    cooldown: 2,
    run: async (client, message, args) => {
        const DiscordJS = require("discord.js")
        const fetch = require("node-fetch")
        const got = require('got')



        got('https://www.reddit.com/r/memes/random/.json').then(response => {
    let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
        
    async function Meme() {
    const memeEmbed = new DiscordJS.MessageEmbed()
        memeEmbed.setTitle(`${memeTitle}`)
        memeEmbed.setURL(`${memeUrl}`)
        memeEmbed.setImage(memeImage)
        memeEmbed.setColor('#00000')
        memeEmbed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        mememsg = await message.channel.send('Searching...');
        setTimeout(() => {
            mememsg.edit(':joy: Found one!', memeEmbed);
          }, 500);
        }
        Meme();
    })
}}