const config = require('../config')
const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
  let embed = new MessageEmbed()
  .addField('About Me', 'A Simple Discord Bot Which Is Fun To Use')
  .addField('.help','to know more about the bot use commands ' + `${config.prefix}` + 'help')
  .addField('Version', '2.2')
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed)
  }
