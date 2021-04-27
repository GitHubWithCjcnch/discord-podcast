const fs = require('fs')
const { prefix } = require('../config.json')
module.exports = {
  name: `${prefix}record`,
  description: "Record the call for remember moments",
  async execute(msg, args) {
    if(!msg.member.voice.channel) return msg.channel.send('Entre em um canal para que eu possa entra fiadaputa')
    const connection = await msg.member.voice.channel.join()
    const audio = connection.receiver.createStream(msg.member, {
      mode: 'pcm',
      end: 'manual'
    })
    audio.pipe(fs.createWriteStream('./user_audio.pcm'))
    
    writer.on('finish', () => {
      msg.member.voice.channel.leave()
      msg.member.send('TUDO GRAVADO, SE FUDEU IHIHIHIHIHIHI')
    })
  }
};