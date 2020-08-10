const Discord = require("discord.js")

exports.run = (client, message, args) => {
  const helpem = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Help Command")
  .addField("ping", ` a cool ping command`, true)
    .addField("about", ` a cool about command`, true)
    .addField("8ball", ` a cool 8ball command`, true)
    .addField("catfact", ` a cool catfact command`, true)
    .addField("dog", ` a cool dog command`, true)
    .addField("eval", ` a cool eval command`, true)
    .addField("hug", ` a cool hug command`, true)
    .addField("info", ` a cool info command`, true)
    .addField("kick", ` a cool kick command`, true)
    .addField("kiss", ` a cool kick command`, true)
    .addField("membercount", ` a cool membercount command`, true)
    .addField("mute", ` a cool mute command`, true)
    .addField("reboot", ` a cool reboot command`, true)
    .addField("reload", ` a cool reload command`, true)
    .addField("serverinfo", ` a cool serverinfo command`, true)
    .addField("set", ` a cool set command`, true)
    .addField("unban", ` a cool unban command`, true)
    .addField("unlock", ` a cool unlock command`, true)
    .addField("unmute", ` a cool unmute command`, true)
    .addField("warn", ` a cool warn command`, true)
  message.channel.send(helpem)
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['k'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kick',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};
