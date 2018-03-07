const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use the purge command!");
 if(!args[0]) return message.reply("Please use a number.\n Usage : (PREFIX)purge __number__");
 message.channel.bulkDelete(args[0]).then(() => {
   message.channel.send(`Cleared **${args[0]}** messages.`).then(msg => msg.delete(5000));
 });

}

module.exports.help = {
  name: "purge"
}
