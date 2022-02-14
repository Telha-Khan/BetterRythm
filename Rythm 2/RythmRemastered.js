const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.once('ready', () => {
    console.log("Signed in as Rythm Remastered");
})

client.on('messageCreate', function (message) {
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;

    const commandBody = message.content.slice(config.prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === "ping"){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }

})

client.login(config.token);