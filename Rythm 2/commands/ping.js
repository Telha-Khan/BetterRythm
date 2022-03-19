const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let waiting = await message.channel
    .send('Pinging :hourglass:...')
    .catch(console.error)
    let embed = new Discord.MessageEmbed()

    .setTitle("User and API latency", client.user.avatarURL)
    .setColor('#8256ff')
    .addField('Ping: ', `${Math.round(message.client.ws.ping)}ms`)
    .addField('Requested by ', message.author.tag)
    .setFooter('Rythm Remastered | Made by Kira.#8355')
    waiting.edit(embed).catch(console.error);
}