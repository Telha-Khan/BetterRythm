const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const Enmap = require("enmap");
const message = require('./events/message');

const client = new Discord.Client();

client.config = config
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

client.commands = new Enmap();

fs.readdir("./events/", (err, files) => {
    if(err) return console.log(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    })
})

client.commands = new Enmap();  

fs.readdir("./commands/", (err, files) => {
    if(err) return console.log(err);
    files.forEach(file => {
        if(!file.endsWith(".js")) return;
        let commandName = file.split(".")[0];
        let props = require(`./commands/${file}`);
        console.log(`Attempting to load ${commandName}`);
        client.commands.set(commandName, props);
    })
}) 
client.commands = new Enmap();

client.once('ready', () => {
    console.log("Signed in as " + client.user.tag);

    client.user.setActivity("bangers", { type: "LISTENING" });

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`);
        })
    })
})

client.login(config.token);