const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use the sayembed command!");
    let botembedmess = args.join(" ");
    message.delete().catch();
    let smicon = message.author.displayAvatarURL;
    
    let esEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag} says...`)
    .setColor("#d4f442")
    .setDescription(botembedmess)
    .setThumbnail(smicon)
    .setFooter("Bot Version : V0.0.2");

    message.channel.send(esEmbed);

    return;

}

module.exports.help = {
    name: "sayembed"
}