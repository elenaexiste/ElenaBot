const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'ping',
  description: 'sends the bots ping',
  execute(message) {
    message.channel.send('Loading data').then (async (msg) =>{
    msg.edit(`${msg.createdTimestamp - message.createdTimestamp}ms`)
    })
  }
}
