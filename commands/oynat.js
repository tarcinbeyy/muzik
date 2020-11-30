const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
let queue = args.join(" ");
  
  
const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username)
.setFooter(message.guild.name)
.setColor('#9dfca0')
.setTimestamp()
  
  
  if(!message.member.voice.channel) return message.channel.send(`<:voice:720120618275831869> Sesli bir kanalda bulunman gerekiyor.`)

  if (!queue) return message.channel.send(`<:youtube:728152662125576232> Arayabilmem için bir şarkı ismi girmelisin.`)

let playing = client.player.isPlaying(message.guild.id);

if(playing){
    // Add the song to the queue
    let song = await client.player.addToQueue(message.guild.id, queue, message.member.user.tag);
    message.channel.send(embed.setDescription(`<:youtube:728152662125576232> \`${song.name}\` listeye eklendi!`))
} else {
    // Else, play the song
    let song = await client.player.play(message.member.voice.channel, queue, message.member.user.tag);
    message.channel.send(embed.setDescription(`<:youtube:728152662125576232> Şu an çalan: \`${song.name}\``))
    song.queue.on('end', () => {
    message.channel.send(embed.setDescription(`<:youtube:728152662125576232> Listenin sonuna geldik, çalmak için biraz daha şarkı ekleyin.`))
    });

    song.queue.on('songChanged', (oldSong, newSong, skipped, repeatMode) => {
        if(repeatMode){
    message.channel.send(embed.setDescription(`<:youtube:728152662125576232> Tekrarlanan: \`${oldSong.name}\``))
        } else {
             message.channel.send(embed.setDescription(`<:youtube:728152662125576232> Şu an çalan: \`${newSong.name}\``))
        }
    });
}
}
  
module.exports.config = {
  name: "oynat",
  aliases: ['oynat']
}
