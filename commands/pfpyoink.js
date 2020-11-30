const { MessageEmbed } = require("discord.js");

exports.run = async(client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(user.username)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp()
    .setImage(user.avatarURL({ dynamic: true, format: 'png', size: 4096 }))
    message.channel.send(embed)
}
