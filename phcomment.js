const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'phcomment',
  description: 'make a ph comment',
  execute(message) {
    var image = message.author.displayAvatarURL({ dynamic: true, format: "png", size: 512,})
    var text = args.slice(1).join(" ")
    var username = message.author.username

    fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${image}&text=${text}&username=${username}`)
      .then(res => res.json())
      .then(data => {
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("phcomment")
        .setImage(data.message)
        .setURL(data.message)

        message.channel.send(embed)
    })
  }
}
