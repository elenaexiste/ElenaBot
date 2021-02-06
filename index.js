const fs = require('fs');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('./config.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command);
}


bot.once('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`)
  bot.user.setPresence( { activity: { type: 'WATCHING', name: `${config.prefix}help`}})
});


bot.on('message', message => {
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase();

  if(!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(message, args)
  } catch (error) {
    console.log(error)
    message.channel.send(` There was an error: \n \`\`\`${error}\`\`\``)
  }
})

bot.login(config.token)
