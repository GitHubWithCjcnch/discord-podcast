const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const botCommands = require('./commands')
const client = new Discord.Client();
client.commands = new Discord.Collection()

Object.keys(botCommands).map(key => {
  client.commands.set(botCommands[key].name, botCommands[key])
})

client.once('ready', () => {
 console.log('Discord Bot Started');
});

client.on('message', msg => {
  const command = msg.content;
  if (command[0] === prefix) {
    console.info(`Called command: ${command}`);
    if (!client.commands.has(command)) return;
    try {
      client.commands.get(command).execute(msg, command);
    } catch (error) {
      console.error(error);
      msg.reply('there was an error trying to execute that command!');
    }
  }
})

client.login(token);
