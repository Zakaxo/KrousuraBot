const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let bicon = bot.user.displayAvatarURL;
    let uEmbed = new Discord.RichEmbed()
    .setColor("#4171f4")
    .setThumbnail(bicon)
    .setDescription("Bot Updates : ")
    .addField("Version V0.0.2", "Added bot version as a footer.\n Added commands : updates , sayembed")
    .setFooter("Bot Version : V0.0.2");

    message.channel.send(uEmbed);

    return;

}

module.exports.help = {
    name: "updates"
}