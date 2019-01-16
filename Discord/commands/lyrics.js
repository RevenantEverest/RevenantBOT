const Discord = require('discord.js');
const apiServices = require('../services/apiServices');

/*
*
*   If Lyrics data returns a character count over 1024 calls handlePages()
*
*   Seperates lyrics into multiple pages
*
*/

function handlePages(message, results, bot) {
    let embed = new Discord.RichEmbed();
    let CPI = 0;
  
    let tempArr = [];
    let tempStr = '';
    let counter = 0;
    for(let i = 0; i < results.lyrics.split("").length; i++) {
        counter++;
        tempStr += results.lyrics.split("")[i];
        if(counter === 1024) {
            tempArr.push(tempStr);
            tempStr = '';
            counter = 0;
        }
    }
    tempArr.push(tempStr);
    console.log(tempArr.length);

    embed
    .setThumbnail(results.album_art)
    .setColor(0xff3399)
    .setTitle('**Song Info**')
    .addBlankField()
    .addField('Artist: ', results.artist, true)
    .addField('Album: ', results.album, true)
    .addField('Song: ', results.name, true)
    .addField('Release Year: ', results.album_year, true)
    .addField('Lyrics: ', `${tempArr[CPI]}`)
    .setFooter(`Page ${CPI + 1}/${tempArr.length}`)
  
    message.channel.send(embed).then(async (msg) => {
        await msg.react("⏪");
        await msg.react("⏹");
        await msg.react("⏩");
  
        const r_collector = new Discord.ReactionCollector(msg, r => r.users.array()[r.users.array().length - 1].id === message.author.id, { time: 60000 });
        r_collector.on('collect', (reaction, user) => {
            if(reaction.users.array()[reaction.users.array().length - 1].id === bot.user.id) return;
            if(reaction.emoji.name === "⏪") {
  
                if(CPI === 0) return reaction.remove(reaction.users.array()[reaction.users.array().length - 1].id);

                CPI--;
                let backEmbed = new Discord.RichEmbed();

                backEmbed
                .setThumbnail(results.album_art)
                .setColor(0xff3399)
                .setTitle('**Song Info**')
                .addBlankField()
                .addField('Artist: ', results.artist, true)
                .addField('Album: ', results.album, true)
                .addField('Song: ', results.name, true)
                .addField('Release Year: ', results.album_year, true)
                .addField('Lyrics: ', `${tempArr[CPI]}`)
                .setFooter(`Page ${CPI + 1}/${tempArr.length}`)
  
                reaction.message.edit(backEmbed);
                reaction.remove(reaction.users.array()[reaction.users.array().length - 1].id);
  
            }else if(reaction.emoji.name === "⏩") {
  
                if(CPI === (tempArr.length - 1)) return reaction.remove(reaction.users.array()[reaction.users.array().length - 1].id);
  
                CPI++;
                let forwardEmbed = new Discord.RichEmbed();

                forwardEmbed
                .setThumbnail(results.album_art)
                .setColor(0xff3399)
                .setTitle('**Song Info**')
                .addBlankField()
                .addField('Artist: ', results.artist, true)
                .addField('Album: ', results.album, true)
                .addField('Song: ', results.name, true)
                .addField('Release Year: ', results.album_year, true)
                .addField('Lyrics: ', `${tempArr[CPI]}`)
                .setFooter(`Page ${CPI + 1}/${tempArr.length}`)
  
                reaction.message.edit(forwardEmbed);
                reaction.remove(reaction.users.array()[reaction.users.array().length - 1].id);
  
            }else if(reaction.emoji.name === "⏹") {
                r_collector.stop();
            }
        });
        r_collector.on('end', e => {
            msg.delete();
        })
    })
};

/*
*
*    Handles Single Page of Lyrics
*
*/

function handleSinglePage(message, results) {
    let embed = new Discord.RichEmbed();
    embed
        .setThumbnail(results.album_art)
        .setColor(0xff3399)
        .setTitle('**Song Info**')
        .addBlankField()
        .addField('Artist: ', results.artist, true)
        .addField('Album: ', results.album, true)
        .addField('Song: ', results.name, true)
        .addField('Release Year: ', results.album_year, true)
        .addField('Lyrics: ', '\n' + results.lyrics)

        message.channel.send(embed);
};

module.exports.run = async (PREFIX, message, args, server, bot) => {
    args.splice(0,1);
    console.log(args);
    apiServices.getLyrics(args.join(" "))
        .then(results => {
            results = results.data.data[0];
            if(results.lyrics.split("").length >= 1024)
                handlePages(message, results, bot);
            else
                handleSinglePage(message, results);
        })
        .catch(err => console.log(err));
};

module.exports.config = {
    name: 'lyrics',
    d_name: 'Lyrics',
    aliases: [],
    params: {required: false, params: 'Song name'},
    category: ['music', 'Music'],
    desc: 'Displays lyrics for a song along with relevant song info'
};