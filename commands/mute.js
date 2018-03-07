const Discord = require("discord.js");
const ms = require("ms");
const config = require("../setari.json");
const red = config.red;
const green = config.green;
const gray = config.gray;
const blue = config.blue;
const orange = config.orange;

module.exports.run = async (bot, message, args) => {

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage : (PREFIX)mute <1/s/h/d>");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          VOICE_CONNECT: false,
          VOICE_SPEAK: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  try {
    await tomute.send(`Hello! You've been muted for ${mutetime}. Sorry!`);
  } catch (e) {
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`);
  }

  let MuteEmbed = new Discord.RichEmbed()
  .setDescription(`Mute Executed by ${message.author}`)
  .setColor(orange)
  .addField("Muted User", tomute)
  .addField("Muted By", message.author)
  .addField("In", message.channel)
  .addField("Length", mutetime)
  .addField("Time", message.createdAt)
  .setFooter("Bot Version : V0.0.2");

  let modlogs = message.guild.channels.find(`name`, "mod-logs");
  if(!modlogs) return message.reply("I can't find the mod-logs channel.");
  modlogs.send(MuteEmbed);

  await(tomute.addRole(muterole.id));


  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute"
}
