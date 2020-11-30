const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
 
  
const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username)
.setFooter(message.guild.name)
.setColor('#9dfca0')
.setTimestamp()
  
  
  if(!message.member.voice.channel) return message.channel.send(`<:voice:720120618275831869> Sesli bir kanalda bulunman gerekiyor.`)
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send(`<:voice:720120618275831869> Bir müzik çalmıyor.`)

  client.player.clearQueue(message.guild.id);

   message.channel.send(embed.setDescription(`<:invisible:720120617772384269> Liste tamamen temizlendi!`))

}

module.exports.config = {
  name: "listeyi-temizle",
  aliases: ['listeyitemizle']
}
