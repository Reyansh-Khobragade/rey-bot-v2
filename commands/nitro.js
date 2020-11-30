exports.run = async(client, message, args) => {
let em = args.join(" ");
if (em ===('') ){
    message.channel.send('You Didnt Specify The Emoji <a:warn:756925671976206399>')
}
else {
const nitrro = client.emojis.cache.find(emoji => emoji.name === em);
message.channel.send(`${nitrro}`)}
}