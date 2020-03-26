const Discord = require('discord.js');
const guildsController = require('../../guildsController');

module.exports = async (bot, guild) => {
    
    guildsController.saveGuild(bot, guild);

    /*
    
        Create Guild Intro Message DB to log when a guild has received an intro message
        Check that DB to see if an intro message has been sent or not

        Used to mitigate the Discord Outages calling the onGuildRemove event

    */

    const channels = guild.channels.array();
    let embed = new Discord.RichEmbed();
    let welcome = { general: null, channels: null };

    embed
    .setColor(0x00ff00)
    .addField(
        'Thank you for adding FiresideBOT <:Fireside:669895306242162699>', 
        'Learn what you can do with `?help` command\n\n' +
        `If you're experiencing any issue please use our [Support Server](https://discord.gg/TqKHVUa)\n\n` +
        `And if FiresideBOT isn't meeting your expectations or you want to just leave a kind message you can tell us with the ` + "`?feedback` command"
    );

    for(let i = 0; i < channels.length; i++) {
        if(channels[i].type !== 'text') continue;
        if(/^.*general.*$/i.test(channels[i].name)) {
            if(!welcome.general || channels[i].position < welcome.general.position)
                welcome.general = channels[i];
        }    
        else if(!welcome.channels || channels[i].position < welcome.channels.position)
            welcome.channels = channels[i];
    }

    welcome.general ? bot.channels.get(welcome.general.id).send(embed) : bot.channels.get(welcome.channels.id).send(embed);
};