const Discord = require('../../../config/config').Discord;

module.exports = {
  setVolume(message, args, server) {
    let volumeEmbed = new Discord.RichEmbed().setColor(0xff6600);
    if(!args[1]) return message.channel.send(volumeEmbed.setTitle(`Current Volume: ${server.volume}`));
    if(!this.isInteger(parseInt(args[1], 10))) return message.channel.send("Invalid integer value.");
    if(parseInt(args[1], 10) > 100) return message.channel.send("Please select a volume between 1 and 100.");
    server.volume = args[1];
    if(server.dispatcher) {
      if(this.isInteger(parseInt(args[1], 10) / 100)) {
        server.dispatcher.setVolume(parseInt(args[1], 10) / 100);
      }else if(this.isFloat(parseFloat(args[1], 10) / 100)) {
        server.dispatcher.setVolume(parseFloat(args[1], 10) / 100);
      }
    }
    if(args[0] === '') return;
    volumeEmbed.setTitle(`Volume set to: ${args[1]}`);
    message.channel.send(volumeEmbed);
  },
  isFloat(n) {
    return n === +n && n !== (n|0);
  },
  isInteger(n) {
    return n === +n && n === (n|0)
  }
};
