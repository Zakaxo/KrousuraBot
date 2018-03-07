const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't use the kick command!");
        if(!args[0] || args[0 == "help"]) return message.reply("Usage : k;kick <user> <reason>");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick Operation")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason)
    .setFooter("Bot Version : V0.0.2");

    let kickChannel = message.guild.channels.find(`name`, "mod-logs");
    if(!kickChannel) return message.channel.send("Can't find mod-logs channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
