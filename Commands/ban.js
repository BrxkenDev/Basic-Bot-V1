const {RichEmbed} = require("discord.js")

exports.run = async (client, message, args) => {
  
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have sufficient priveliges.");
  if (bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("User cannot be banned.")
  
  if(!bReason)
return message.channel.send("Please provide a reason")
  let embed = new RichEmbed()
  .setDescription("Ban")
  .setColor("#7289DA")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason)
  
  let incidentChannel = message.guild.channels.find(`name`, "mod-logs");
  if (!incidentChannel) return message.channel.send("Can't find mod-logs channel.");
  
  message.guild.member(bUser).ban(bReason)
  incidentChannel.send(embed);
  
  return;
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ban',
    description: 'Gives you a random response to a question.',
    usage: '8ball [question]'
};
