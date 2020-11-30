exports.run = async(client, message, args) => {
    let dm = args.join("%20");
    if (dm === ('')){
        message.channel.send('You didnt provide any text <a:warn:756925671976206399>')
    }
    else{
        message.author.send(`https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=`+ dm)
        message.channel.send('You have got a DM 📩')
    }
}