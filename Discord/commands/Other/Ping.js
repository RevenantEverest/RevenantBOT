module.exports.run = async (PREFIX, message, args, server, bot) => {
    message.channel.send("Pong");
};

module.exports.config = {
    name: 'ping',
    d_name: 'Ping',
    aliases: ['p'],
    category: 'Other',
    desc: 'Pong :eyes:'
}