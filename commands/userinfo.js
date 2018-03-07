const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let eicon = message.author.displayAvatarURL;
  let userEmbed = new Discord.RichEmbed()
  .setDescription("User Information")
  .setAuthor(bot.user.username)
  .setColor("#120b93")
  .setThumbnail(eicon)
  .addField("User ID", message.author.id)
  .addField("Full Username", message.author.tag)
  .addField("Created On", message.author.createdAt)
  .setFooter("Bot Version : V0.0.2");

  message.channel.send(userEmbed);
}

module.exports.help = {
  name: "userinfo"
}
