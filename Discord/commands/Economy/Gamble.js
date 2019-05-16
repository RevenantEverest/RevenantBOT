const discordCurrencyDB = require('../../models/discordCurrencyDB');
const currencyDB = require('../../models/currencyDB');
const pgp = require('pg-promise')();
const QRE = pgp.errors.QueryResultError;
const qrec = pgp.errors.queryResultErrorCode;

async function updateCurrency(message, currency, settings, amountWagered, RNG, winner) {
    let newAmount = 0;
    if(winner) newAmount = parseInt(currency.currency, 10) + (amountWagered * 2);
    if(!winner) newAmount = currency.currency - amountWagered;

    discordCurrencyDB.update({ currency: newAmount, discord_id: message.author.id, guild_id: message.guild.id })
    .then(() => {
        if(winner)
            message.channel.send(
                `**${message.author.username}** rolled a **${RNG}** and won **${(amountWagered * 2).toLocaleString()}** ` + 
                `**${settings.currency_name}** and now has **${newAmount.toLocaleString()} ${settings.currency_name}**`
            );
        else if(!winner)
            message.channel.send(
                `**${message.author.username}** rolled a **${RNG}** and lost **${amountWagered.toLocaleString()}** ` + 
                `**${settings.currency_name}** and now has **${newAmount.toLocaleString()} ${settings.currency_name}**`
            );
    })
    .catch(err => {
        console.error(err);
    })
}

module.exports.run = async (PREFIX, message, args, server, bot, options) => {
    if(!args[1]) return message.channel.send('Please specify an amount to wager');
    if(!Number.isInteger(parseInt(args[1], 10))) return message.channel.send('Please specify an integer value to wager');

    let amountWagered = parseInt(args[1], 10);

    currencyDB.findCurrencySettings(message.guild.id)
        .then(settings => {
            discordCurrencyDB.findByDiscordIdAndGuildId({ discord_id: message.author.id, guild_id: message.guild.id })
                .then(currency => {
                    let RNG = Math.floor(Math.random() * 100);
                    if(currency.currency < amountWagered) return message.channel.send(`You can't gamble what you don't have`);

                    if(RNG > 50) {
                        let winner = true;
                        updateCurrency(message, currency, settings, amountWagered, RNG, winner);
                    }
                    else if(RNG <= 50) {
                        let winner = false;
                        updateCurrency(message, currency, settings, amountWagered, RNG, winner);
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        })
        .catch(err => {
            console.error(err);
        })
};

module.exports.config = {
    name: 'gamble',
    d_name: 'Gamble',
    aliases: [],
    params: { required: true, params: 'An amount to wager' },
    category: 'Economy',
    desc: 'Test your luck and win big',
    example: 'gamble 10'
};