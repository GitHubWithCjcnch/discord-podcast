const  { prefix } = require('../config.json')
module.exports ={
  name: `${prefix}leave`,
  description: 'Leave the channel that is in the moment',
  async execute(msg, args) {
    const connection = await msg.member.voice.channel
    connection.leave()
    msg.channel.send('To metendo o pé p-p')
  }
}