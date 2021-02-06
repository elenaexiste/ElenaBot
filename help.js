const config = require('../config.json')
const Discord = require('discord.js')

module.exports = {
  name: 'help',
  description: 'A list of all my commands',
  aliases: ['commands'],
  execute(message, args) {
    const data = [];
    const { commands } = message.client;

    if (!args.length) {
      data.push(commands.map(command => `**` + command.name + `**` + `\n ${command.description}`).join(',\n\n '));
      
      let embed = new Discord.MessageEmbed()
      .setTitle(`Here\'s a list of all my commands`)
      .setDescription(data, { split: true })
      .setColor("RANDOM")

      return message.channel.send(embed)
    }
  }
}
