const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  description: 'Sends an image of your avatar',
  execute(message, args) {
    var user = message.mentions.users.first()
    if (!user) {
      user = message.author
    }

    let embed = new Discord.MessageEmbed()
    .setTitle(`${user.username}\'s avatar`)
    .setImage(user.displayAvatarURL({ dynamic: true, format: 'png', size: 512}))
    .setURL(user.displayAvatarURL({ dynamic: true, format: 'png', size: 512}))
    .setColor("RANDOM")

    message.channel.send(embed)
  }
}
