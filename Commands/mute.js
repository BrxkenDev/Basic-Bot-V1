exports.run = async (client, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Usage: !mute <@user> <#s/h/d/m>");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SEND_TTS_MESSAGES: false,
          ATTACH_FILES: false,
          SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  tomute.addRole(muterole.id).then(() => {
  message.delete()
  tomute.send(`You have been muted in ${message.guild.name}.`)
  message.reply(`<@${tomute.id}> has been muted`);
  })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['tm'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'mute',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};
