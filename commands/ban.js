const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!\n The respective person needs to be mentioned.");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You can't use the ban command!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban Operation")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
    .setFooter("Bot Version : V0.0.2");

    let incidentchannel = message.guild.channels.find(`name`, "mod-logs");
    if(!incidentchannel) return message.channel.send("Can't find mod-logs channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
