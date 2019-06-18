const Discord = require('discord.js');
const chalk = require('chalk');
const utils = require('../utils/utils');
const services = {};
const colors = [0xffcc00, 0x00ff00, 0xff0066, 0xcc66ff, 0x1affff, 0x009900, 0xcc6699, 0xff6600];

const Discord_Bot = require('../Discord_Bot');

services.handleOnReady = async (bot, hook) => {
    return console.log(chalk.hex("#00ff00")(`[HTTP]`) +  ` DBL-Webhook: Listening on port ${hook.port}`);
};

services.handleOnPosted = async (bot) => {
    let embed = new Discord.RichEmbed();
    embed.setColor(0x00ff00).setTitle("Server Count Posted").setFooter(await utils.getDate());

    bot.channels.get("543862697742172179").send(embed);
};

services.handleOnVote = async (vote) => {
    console.log(vote);
    let voteEmbed = new Discord.RichEmbed();
    let logEmbed = new Discord.RichEmbed();

    voteEmbed
    .addField('**Vote Received**', 'Thank you for your vote!')
    .setColor(0xffcc00)

    logEmbed
    .setColor(colors[Math.floor(Math.random() * colors.length)])
    .addField("Vote Received", `ID: ${vote.user}`)
    .setFooter(await utils.getDate())

    console.log(Discord_Bot);
    // bot.fetchUser(vote.user).send(voteEmbed);
    // bot.channels.get("539303187342032896").send(logEmbed);
};

services.handleOnError = async (bot, err) => {
    let embed = new Discord.RichEmbed();
    embed.setColor(0xff0000).setTitle("DBL ERROR").setFooter(await utils.getDate());

    bot.channels.get("543862697742172179").send(embed);
};

module.exports = services;