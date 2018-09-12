const config = require('../../../config/config');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');

const currentPlaylist = require('./queue').currentPlaylist;

module.exports = {
  delsong(message, args, server) {
    let index = parseInt(args[1], 10) - 1;
    if(isNaN(index)) {
      message.channel.send("Please specify a numeric value.");
      return;
    }
    if(!server.queue[index]) {
      message.channel.send(`Song doesn't exist in queue.`);
      return;
    }
    let removedSong = currentPlaylist.titles[index];
    currentPlaylist.titles.splice(index, 1);
    currentPlaylist.links.splice(index, 1);
    server.queue.splice(index, 1);
    message.channel.send(`${removedSong} has been removed from the queue.`);
  }
}