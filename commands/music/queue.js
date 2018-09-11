const config = require('../../config/config');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');

module.exports = {
  currentPlaylist: { titles: [], links: [], length: [] },
  currentSong: [],
  queue(message, args, server) {
    let queueEmbed = new Discord.RichEmbed();
    if(this.currentPlaylist.titles.length >= 1) {
      for(let i = 0; i < this.currentPlaylist.titles.length; i++) {
        queueEmbed.addField((i + 1 + ". ") + this.currentPlaylist.titles[i], "Link: " + this.currentPlaylist.links[i] );
      }
      return queueEmbed;
    }else {
      return "No other songs in queue.";
    }
  },
  showCurrentSong(message, args, server) {
    return this.currentSong[0];
  }
}
