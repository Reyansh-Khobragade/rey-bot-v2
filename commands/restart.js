const config = require('../config')

exports.run = async(client, message, args,) => {
    if (message.author.id === "731721433515950080") {
        await message.channel.send("Restarting the bot");
        await client.destroy();
        setTimeout(() => {
            client.login(config.token);
        }, 5000);} 
    else  {
        await message.channel.send('you are not allowed to use this command')
        }
    
}