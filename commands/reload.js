const config = require('../config.json')

module.exports = {
  name: 'reload',
  description: 'Reloads a command',
  execute(message, args) {
    if (message.author.id != config.owner) return message.channel.send(`Error: \`\`\` You do not own this bot \`\`\``)
    if (!args.length) return message.channel.send(`\`\`\`You didnt pass a command to reload\`\`\``)

    const commandName = args[0].toLowerCase()
    const command = message.client.commands.get(commandName)
      || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

    if(!command) return message.channel.send(`\`\`\`Unable to find the command ${commandName}\`\`\``)

    delete require.cache[require.resolve(`./${commandName}.js`)]

    try {
      const newCommand = require(`./${commandName}.js`)
      message.client.commands.set(newCommand.name, newCommand)
      message.channel.send(`\`\`\`Reloaded ${commandName}\`\`\``)
    } catch (error) {
      console.log(error)
      message.channel.send(`There was an error reloading ${commandName}: \`\`\` ${error} \`\`\``)
    }
  }
}
