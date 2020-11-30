const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
let embed = new MessageEmbed()
.setTitle('Ping')
.setDescription('Internet Latency is ' + `${Date.now() - message.createdTimestamp}` + 'ms' + "\n\u200b" + 'API Latency is ' + `${Math.round(client.ws.ping)}` + 'ms' )
.setColor("GREEN")
.setTimestamp()
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send(embed)
}