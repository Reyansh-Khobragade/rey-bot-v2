exports.run = async(client, message, args) => {

         let text = args.join(" ");
          const jimp = require('jimp');
  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK) // there is WHITE too
  let theimage = await jimp.read('https://cdn.glitch.com/0879733f-a595-47e0-8432-78be65e99f1e%2Fwhiteboard.png?v=1604824216538') // Load the Main Image
  theimage.print(font, 104, 130, `${text}`) // Place Text on the Image and Position it
  theimage.write('hmm.png') // Output the Image
  message.channel.send(``, { files: ["./hmm.png"] })
                                               }
;