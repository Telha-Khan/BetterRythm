module.exports.run = async(client, message, args) => {
    if(!args[0]) return message.reply("Please enter the correct arguments.")

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("You do not have the proper permissions for this command!");
    } else {
        if(!args[0] > 0) return message.reply("Please enter a number above 0");
        message.channel.bulkDelete(args[0], true);
        message.channel.send("```" + args[0] + " messages deleted```")
        .then(message => {
            message.delete({ timeout: 2300 })
        })
    }
}