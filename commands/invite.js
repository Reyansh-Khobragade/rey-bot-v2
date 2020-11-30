const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
  let embed = new MessageEmbed()
  .setTitle("Invite me")
  .setDescription("Invite me to your server if you want to")
  .addField("Invite Link","https://discord.com/api/oauth2/authorize?client_id=773847989465907200&permissions=2146958847&scope=bot")
         .setColor("GREEN")
         .setTimestamp()
         .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(embed)
}
