const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'baguette',
  description: 'sends an image of the users avatar eating a baguette',
  execute(message) {
    var user = message.mentions.users.first()
    if (!user) {
      user = message.author
    }
    url = user.displayAvatarURL({ dynamic: true, format: "png", size: 512,})
    fetch(`https://nekobot.xyz/api/imagegen?type=baguette&url=${url}`)
      .then(res => res.json())
      .then(data => {
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("baguette")
        .setImage(data.message)
        .setURL(data.message)

        message.channel.send(embed)

      })
    }
  }
