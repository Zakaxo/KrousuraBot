const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let aicon = message.author.displayAvatarURL;
    let avatarRmbed = new Discord.RichEmbed()
    .setDescription("Your avatar!")
    .setColor("#15f153")
    .setImage(aicon)
    .setFooter("Bot Version : V0.0.2");

    message.channel.send(avatarRmbed);
}

module.exports.help = {
  name:"avatar"
}
