module.exports.run = async(client, message, args) => {
    const phases = ['(-°□°)-  ┬─┬', '(╯°□°)╯    ]', '(╯°□°)╯  ︵  ┻━┻', '(╯°□°)╯       [', '(╯°□°)╯           ┬─┬']
    const originalMessage = await message.channel.send("(\\\\°□°)\\\\  ┬─┬");

    for(const frame of phases) {
        setTimeout(() => {}, 1000);
        await originalMessage.edit(frame);
    }
    return message;
}