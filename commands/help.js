const Discord = require("discord.js");
const config = require("../setari.json");
const red = config.red;
const green = config.green;

module.exports.run = async (bot , message, args) => {

  let helpEmbed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .setColor(red)
  .addField("Member Commands", "Commands for members.")
  .addField("help", "Displays the commands from the bot.")
  .addField("serverinfo", "Displays the server info.")
  .addField("botinfo", "Displays the bot info.")
  .addField("userinfo", "Displays your info.")
  .addField("cat", "Displays random pictures with cute cats!")
  .addField("dog", "Displays random pictures with cute dogs!")
  .addField("report", "Reports a respective user. (Need Reason)")
  .setFooter("Bot Version : V0.0.2");

  try {
    await message.author.send(helpEmbed)
    message.react("😈")
  } catch (e) {
    message.reply("Your DMs are locked. I can't send you the you the Members Commands.");
  }

  let modEmbed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor(green)
  .addField("Mod Commands", "Commands for moderators.")
  .addField("help", "Displays the commands from the bot.")
  .addField("kick", "Kicks a respective user. (Need Reason)")
  .addField("mute", "Mutes a respective user.")
  .addField("ban", "Bans a respective user. (Need Reason)")
  .addField("prefix", "Change the prefix in a respective channel.")
  .addField("warn", "Warns a respective user. (Still in working)")
  .addField("purge", "Deletes a specific number of messages.")
  .addField("say", "Make the bot say a specific message.")
  .setFooter("Bot Version : V0.0.2");

  try {
    await message.author.send(modEmbed);
  } catch (e) {
    message.reply("Your DMs are locked. I can't send you the you the Moderators Commands.");
  }

}

module.exports.help = {
  name: "help"
}
