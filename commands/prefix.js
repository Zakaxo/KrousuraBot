const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use the prefix command!");
 if(!args[0] || args[0 == "help"]) return message.reply("Usage : k;prefix <prefix>");

 let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

 prefixes[message.guild.id] = {
   prefixes: args[0]
 };

fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
  if (err) console.log(err)
});

 let sEmbed = new Discord.RichEmbed()
 .setColor("#ff9900")
 .setTitle("Prefix Set!")
 .setDescription(`Prefix changed to ${args[0]}`)
 .setFooter("Bot Version : V0.0.2");

  message.channel.send(sEmbed);
}

module.exports.help = {
  name: "prefix"
}
