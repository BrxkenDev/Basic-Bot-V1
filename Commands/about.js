const {RichEmbed} = require("discord.js")
const fs = require("fs");

exports.run = async (client, message, args, prefixes, prefix) => {
  
  let totalSeconds = (client.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = Math.round(totalSeconds % 60);
  let uptime = `${hours} hrs ${minutes} mins ${seconds} secs`;
  
  const embed = new  RichEmbed()
  .setColor("#7289DA")
  .addField(`Version`, `1.0`, true)
  .addField(`Node JS`, `8.x`, true)
  .addField(`Library`, `[discord.js](https://discord.js.org/#/)`, true)
  .addField(`Uptime`, `${uptime}`, true)
  .addField(`Users`, `${client.users.size}`, true)
  .addField(`Developer`, `Evan H.#0001`, true)
  .setFooter(`Prefix: ! | The Prefix`)
  .setTimestamp()
  message.channel.send(embed)   
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  module.exports.help = {
    name: 'about',
    category: 'Other',
    description: 'Displays information on this bot',
    usage: 'about'
};
