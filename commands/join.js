const { prefix } = require('../config.json')
module.exports = {
  name: `${prefix}join`,
  description: "Enter's in a channel",
  async execute(msg, args) {
    if (msg.member.voice.channel) {
      msg.channel.send('TO CHEGANDO XARÁ');
      const connection = await msg.member.voice.channel
      connection.join()
    } else if (!msg.member.voice.channel) {
      msg.channel.send('Você não está em um canal para que eu possa entrar')
    }
  }
};