const Discord = require("discord.js");
const fs = require("fs");


const client = new Discord.Client();
const config = require("./config.js");
client.config = config;
client.queue = new Map()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.login(config.token);

  client.on ('message', async message => {
        if (message.author.bot) return;
    if(message.content.toLowerCase() === 'cat'){
        message.channel.send('<a:catyes:773862641265147944>')
     return message.react("<a:catyes:773862641265147944>")
    }
    if(message.content.toLowerCase() == 'bye'){
     message.channel.send('<a:wave:773927372847579176>') 
      return message.react("<a:wave:773927372847579176>")
    }
    if(message.content.toLowerCase() == 'rick'){
       message.channel.send('<a:rickroll:773941923383214102>') 
     return message.react("<<a:rickroll:773941923383214102>")
    }
    if(message.content.toLowerCase() == 'cool'){
        message.channel.send('<a:Pikachu:773927039551406100>') 
    return message.react("<a:Pikachu:773927039551406100>")
    }
    if(message.content.toLowerCase() == 'lol'){
        return message.react("🤣")
    }
    if(message.content.toLowerCase() == 'oof'){
        message.react("<a:oof:774232327614103582>")
     return message.channel.send('oof!') 
    } 
    if(message.content.toLowerCase() == 'xd'){
       return message.react("<:XD:774143453838835723>")
    }
    if(message.content == '<@!773847989465907200>'){
     return message.react("<a:whyping:774183987937542185>")
    }
    if(message.content == '<@!731721433515950080>'){
     return message.channel.send("Woohoo!!! You Found My Creator!!!")
    }
    if(message.content == '<@773847989465907200>'){
        return message.react("<a:whyping:774183987937542185>")
    }
    if(message.content == '<@731721433515950080>'){
        message.react("<a:whyping:774183987937542185>")
     return message.channel.send("Woohoo!!! You Found My Creator!!!")
    }
    if(message.content.toLowerCase() == 'no'){
       return message.channel.send('<a:no:774196897237172244>') 
    }
    if (message.content.toLowerCase() === 'ping') {  
       message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
    if(message.content.toLowerCase() == 'f'){
        return message.reply('Have Payed Their Respect!')   
    }
    if(message.content == '69'){
        return message.react('<:a:nicenice:774242161787928616>') 
    }
    if(message.content.toLowerCase() == 'rip'){
    return message.react("<a:rip:774233181884514335>")
    }
    if(message.content.toLowerCase() == 'butt'){
        return message.channel.send("https://tenor.com/view/smack-that-booty-massage-gif-13340994")
    }
    if(message.content.includes('<@731721433515950080>')){
         message.react("<a:whyping:774183987937542185>")
    }
    if(message.content.includes('<@!731721433515950080>')){
        message.react("<a:whyping:774183987937542185>")
    }
    if(message.content.toLowerCase() == 'hi'){
        return message.reply('Hello <a:pikahi:774893437023289344>') 
    }
    if(message.content.toLowerCase() == 'hello'){
        return message.reply('Hello <a:pikahi:774893437023289344>') 
    }

});
   client.on('message', message => { 
         if (message.author.bot) return;
    if (message.content.toLowerCase() == 'rps') {
      const whatyouget = ["scissors :scissors:", "paper :newspaper2:", "rock :shell:"] 
  const playergets = whatyouget[Math.floor(Math.random() * whatyouget.length)]; 
      const whatbotget = ["scissors :scissors:", "paper :newspaper2:", "rock :shell:"] 
  const botgets = whatbotget[Math.floor(Math.random() * whatbotget.length)]; 
   
  
  let embed = new Discord.MessageEmbed()
  .setTitle("RPS :scissors:/ :newspaper2:/ :shell:")
  .setDescription("Who will win " + message.author.username + " or  Bot")
  .addField("Bot got",botgets)
  .addField(message.author.username + " got", playergets)
  .setColor("RANDOM")
  if (botgets == playergets) {
          const wow = client.emojis.cache.find(emoji => emoji.name === "spongebobdancepants");
      embed.addField("Its a tie",wow)
  
  }
      
  if (botgets == "paper :newspaper2:" && playergets == "rock :shell:") {
      embed.addField("Rock Beats paper " + message.author.username + " wins",":sunglasses:")
  
  }
      
      if (botgets == "rock :shell:" && playergets == "paper :newspaper2:") {
              const wow = client.emojis.cache.find(emoji => emoji.name === "warn");
  
      embed.addField("Rock Beats paper Bot wins",wow)
  
  }
      
      if (botgets == "paper :newspaper2:" && playergets == "scissors :scissors:") {
        const wow = client.emojis.cache.find(emoji => emoji.name === "wow");
  
      embed.addField("Scissors Cuts paper " + message.author.username + " wins",wow)
  
  }
    
      if (botgets == "rock :shell:" && playergets == "scissors :scissors:") {
        const wow = client.emojis.cache.find(emoji => emoji.name === "blob_party");
  
      embed.addField("Rock Smashes Scissors Bot wins",wow)
  
  }
      
          if (botgets == "scissors :scissors:" && playergets == "rock :shell:") {
        const wow = client.emojis.cache.find(emoji => emoji.name === "thinky");
  
      embed.addField("Rock Smashes Scissors " + message.author.username + " wins",wow)
  
  }
      
              if (botgets == "scissors :scissors:" && playergets == "paper :newspaper2:") {
        const wow = client.emojis.cache.find(emoji => emoji.name === "thonk_gif");
  
      embed.addField("Scissors cuts Paper Bot wins",wow)
  
  }
  message.channel.send(embed)
  
}})
