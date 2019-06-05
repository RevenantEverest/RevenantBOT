const Discord = require('discord.js');
const config = require('../../config/config');
const utils = require('../utils/utils');

module.exports.run = async (PREFIX, message, args, server, bot, options) => {
    if(message.author.id !== "163346982709100546") return;

    let embed = new Discord.RichEmbed();
    
    embed.setTitle('Queues In Progress').setColor(0x33ccff).addBlankField()

    let queuesInProgress = config.servers.filter(el => el.queue.isPlaying).length || '';
    let queueLengthInSeconds = 0;
    let queueSongAmount = 0;
    if(queuesInProgress >= 1) {
        [].concat.apply([], config.servers.map(el => el.queue.queueInfo)).map(el => el.duration).forEach(el => {
            queueLengthInSeconds += parseInt(el, 10);
        });

        queueSongAmount = [].concat.apply([], config.servers.map(el => el.queue.queueInfo)).length;
        queueLengthInSeconds = await utils.timeParser(queueLengthInSeconds);
    }
    
    embed
    .addField("In Progress:", queuesInProgress, true)
    .addField("Overall Length: ", queueLengthInSeconds, true)
    .addField("Songs In Queue:", queueSongAmount)

    message.channel.send(embed);
};

module.exports.config = {
    name: 'checkqueue',
    d_name: 'CheckQueue',
    aliases: [],
    category: "Dev"
};