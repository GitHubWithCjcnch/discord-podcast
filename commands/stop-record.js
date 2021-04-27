const { prefix } = require('../config.json')
module.exports = {
  name: `${prefix}stop-record`,
  description: 'Stop of stream of the bot',
  async execute(msg, args) {
    const connection = await msg.member.voice.channel
    const coronga = msg.guild.emojis.cache.find(emoji => emoji.name === 'coronga')
    const embed = new Discord.MessageEmbed()
      .setColor('#ff7096')
      .setTitle(`CABO A GRAVAÇÃO, CABO ${coronga}`);
    connection.leave()
    msg.channel.send(embed)
  }
}