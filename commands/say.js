const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use the say command!");
 let botmess = args.join(" ");
 message.delete().catch();
 message.channel.send(botmess);

}

module.exports.help = {
  name: "say"
}
