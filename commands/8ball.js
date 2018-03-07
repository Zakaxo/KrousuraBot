const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[0] || args[0 == "help"]) return message.reply("Usage : k;8ball <question>");
  if(!args[2]) return message.reply("Please ask a full question.");
  let replies = ["Yes.", "No.", "I don't know.", "Ask again later."];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let ballEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#ff9900")
  .addField("Your Question", question)
  .addField("My Answer", replies[result])
  .setFooter("Bot Version : V0.0.2");


  message.channel.send(ballEmbed);
}

module.exports.help = {
  name: "8ball"
}
