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
  
  let volume = parseInt(args.join(" "));
  if (!volume) return message.channel.send(`<:voice:720120618275831869> Sesi düzgünce ayarlayabilmem için bir sayı girmelisiniz.`)
  if (isNaN(args[0])) return message.channel.send(`<:voice:720120618275831869> Lütfen sadece sayı girin.`)
  
  client.player.setVolume(message.guild.id, volume);
    
  message.channel.send(embed.setDescription(`<:invisible:720120617772384269> Çalınan şarkılar için ses seviyesi \`${args.join(" ")}\` olarak ayarlandı.`))


}

module.exports.config = {
  name: "sesi-ayarla",
  aliases: ['sesiayarla']
}
