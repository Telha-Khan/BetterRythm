const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(!args[0] && !args[0]) return message.channel.send("```Invalid arguments passed.```");

    let firstArg = args[0];
    let secondArg = args[1];
 
    let answer = (firstArg / secondArg) * 100;

    let embed = new Discord.MessageEmbed()

    .setTitle("Percentage:")
    .setColor("'#8256ff'")
    .addField(firstArg + " Of " + secondArg + " is", answer+"%")
    .setFooter('Rythm Remastered | Made by Kira.#8355');

    message.channel.send(embed);
}