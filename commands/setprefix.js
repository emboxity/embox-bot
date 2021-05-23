const testSchema = require("../Mongo/prefix")
module.exports = {
    name: 'setprefix',
    aliases: 'sp',
    description: 'Changes the prefix.',
    cooldown: 10.5,
    guildOnly: true,
    run: async(client, message, args) =>{

    if(!args[0]){
        return message.channel.send('invalid usage')
      }

    if(args[0]. length > 3){
        return message.channel.send('no')
    }
        try{
        await testSchema.findOneAndUpdate({prefix: `${args[0]}`, Guild: `${message.guild.id}`})
        message.channel.send(`Success, prefix is set to ${args[0]}`)    
        }
        catch(error){
        console.log(error)    
        }
    }
}