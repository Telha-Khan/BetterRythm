const Discord = require('discord.js');
let got = require('got');

module.exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed();
    got('https://www.reddit.com/r/meme/hot/.json?limit=100').then(response => {
        let content = JSON.parse(response.body);
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let embed = new Discord.MessageEmbed()
        .setTitle(`${memeTitle}`)
        .setImage(memeImage)
        .setColor('#8256ff')
        .setFooter('Rythm Remastered | Made by Kira.#8355')
        message.channel.send(embed);
        setTimeout(() => {}, 2500)
    }).catch(console.error);
}