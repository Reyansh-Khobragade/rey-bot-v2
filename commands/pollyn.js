const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
let pollyn = args.join(' ')
let dscrpt = (`**${pollyn}**\n\n\n` + `👍 Yes\n\n` + '👎 No')
let embed = new MessageEmbed()
    .setTitle('POLL! Yes or No?')
    .setDescription(dscrpt)
let msg = await message.channel.send(embed);
msg.react('👍');
msg.react('👎')
}