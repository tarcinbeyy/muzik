const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {


const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username)
.setFooter(message.guild.name)
.setColor('#9dfca0')
.setTimestamp()
  
  
    if(!message.member.voice.channel) return message.channel.send(`<:voice:720120618275831869> Sesli bir kanalda bulunman gerekiyor.`)
  
    let queue = client.player.getQueue(message.guild.id);

    if(!queue) return message.channel.send(`<:voice:720120618275831869> Bir müzik çalmıyor.`)

    let q = queue.songs.map((song, i) => {
        return `${i === 0 ? '1' : `${i+1}`}: \`${song.name}\`
Kanal: **${song.author}**
Çaldıran: **${song.requestedBy}**
`
    }).join('\n');  
       message.channel.send(embed.setDescription(q))


}

  
module.exports.config = {
  name: "liste",
  aliases: ['liste']
}
