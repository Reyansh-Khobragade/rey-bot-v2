const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
  let nice = args.join(" ");
  if(nice === ('')){
      message.channel.send('You Didnt Provide Any Text <a:warn:756925671976206399>')
  }
  else {
  let embed = new MessageEmbed()
   .setDescription(nice)
   .setColor("RANDOM")
    message.channel.send(embed)
  }
}