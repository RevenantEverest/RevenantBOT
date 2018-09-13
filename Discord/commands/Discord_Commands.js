const config = require('../.././config/config');
const PREFIX = '?';

let fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Fuck You",
  "If you believe hard enough",
  "Try asking again",
  "Kill Yourself",
  "Sure",
  "Fair Enough",
  "Please stop",
  "Incorrect",
  "You got it",
  "Mhm",
  "這都是中文的。當然"
];

//Command Imports
const play = require('./music/play');
const queue = require('./music/queue');
const delSong = require('./music/delSong');
const poll = require('./poll/poll');

module.exports = {
  commands(message) {

    if(!message.content.startsWith(PREFIX)) return;

    let args = message.content.substring(PREFIX.length).split(" ");

    if(!config.servers[message.guild.id]) config.servers[message.guild.id] = {
      queue: {
        titles: [],
        links: []
      }
    };

    let server = config.servers[message.guild.id];

    switch (args[0].toLowerCase()) {

      case "ping":
        message.channel.send("pong")
        break;

      case "8ball":
        if(args[1]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.send("Ask a question.");
        break;

      case "dice":
        if(!args[1]) {
          message.channel.send('You rolled a ' + (Math.floor(Math.random() * 20)));
          return;
        }
        if(isNaN(parseInt(args[1], 10)) && args[1] != " ") {
          message.channel.send("Please specify a number.");
          return;
        }
        if(!isNaN(parseInt(args[1], 10))) {
          message.channel.send('You rolled a ' + (Math.floor(Math.random() * args[1])));
          return;
        }
        break;

      //Poll Commands
      case "poll":
        if(!args[1]) {
          message.channel.send("No Poll Question Specified.");
          return;
        }
        // TODO: Check if a poll is active
        break;
      case "newpoll":
        if(!args[1]) {
          message.channel.send("No poll name specified.");
          return;
        }
        poll.pollname(message, args, server);
        break;
      case "pollanswer":
        if(!args[1]) {
          message.channel.send("No poll answer specified.");
          return;
        }
        poll.pollanswer(message, args, server);
        break;
      case "sendpoll":
        if(!server.poll) {
          message.channel.send("No current poll.");
          return;
        }
        poll.sendPoll(message, args, server);
        break;
      case "vote":
        if(!args[1]) {
          message.channel.send("Please specify a numberic value.");
          return;
        }
        poll.vote(message, args, server);
        break;

      //Music Commands
      case "play":
        play.play(message, args, server);
        break;
      case "queue":
        message.channel.send(queue.queue(message, args, server));
        break;
      case "currentsong":
        message.channel.send(queue.showCurrentSong(message, args, server));
        break;
      case "skip":
        if(server.dispatcher)
          server.dispatcher.end();
        break;
      case "stop":
        if(message.guild.voiceConnection)
          message.guild.voiceConnection.disconnect();
        break;
      case "playlist":
        play.play(message, args, server);
        break;
      case "delsong":
        if(!args[1]) {
          message.channel.send("Please specifiy a song to delete.");
          return;
        }
        delSong.delsong(message, args, server);
        break;

      case "test":
        break;
      //Easter Eggs
      default:
        message.channel.send("Not a valid command");
        break;
    }
  }
}
