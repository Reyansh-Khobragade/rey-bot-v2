const { MessageEmbed } = require("discord.js");

const os = require('os');

module.exports.run = async (client, message, args) => {

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let stats = new MessageEmbed()
    .setTitle(`System Information of ${client.user.username}`)
    .setColor('BLUE')
    .addField("Server Count", `${servercount}`, true)
    .addField("Users Count", `${usercount}`, true)
    .addField("Channel's Count", `${channelscount}`, true)
    .addField('Architecture', `${arch}`, true)
    .addField('Platform', `${platform}`, true)
    .addField('Node-Version', `${NodeVersion}`, true)
    .addField('Shards', `${shard}`, true)
    .addField('Cores', `${cores}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

module.exports.help = {
    name: "stats"
}
