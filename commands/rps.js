const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
    // This took me nearly 1 hour to code
        // Player Gets
      const whatyouget = ["scissors :scissors:", "paper :newspaper2:", "rock :shell:"] 
  const playergets = whatyouget[Math.floor(Math.random() * whatyouget.length)]; 
  // Bot Gets
      const whatbotget = ["scissors :scissors:", "paper :newspaper2:", "rock :shell:"] 
  const botgets = whatbotget[Math.floor(Math.random() * whatbotget.length)]; 
   
  
  let embed = new MessageEmbed()
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
}