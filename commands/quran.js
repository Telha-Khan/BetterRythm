const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    const quranArabic = ["[وَقالَ رَبُّكُمُ ادعوني أَستَجِب لَكُم]", "[وَما كانَ اللَّهُ مُعَذِّبَهُم وَهُم يَستَغفِرونَ]", "[فَاذكُروني أَذكُركُم]", "[وَجَعَلَني مُبارَكًا أَينَ ما كُنتُ]", "[إِنَّ الَّذينَ آمَنوا وَعَمِلُوا الصّالِحاتِ لَهُم جَنّاتٌ تَجري مِن تَحتِهَا الأَنهارُ ۚ ذٰلِكَ الفَوزُ الكَبيرُ]"];
    const quranTranslations = ["Your Lord has said, Call Me, and I will hear you!", "And Allah would not punish them while they seek forgiveness.", 
    "Remember Me, and I will remember you", "And he has made me blessed wherever I am", "Indeed, those who have believed and done righteous deeds will have gardens beneath which rivers flow. That is the great attainment."];
    const quranNum = ["40:60", "8:33", "2:152", "19:31", "85:11"];

    let randomQuote = Math.round(Math.random() * (quranArabic.length - 1));

    let embed = new Discord.MessageEmbed()
    
    .setTitle("Quran Quotes", client.user.avatarURL)
    .setColor('#8256ff')
    .addField('Arabic', quranArabic[randomQuote])
    .addField('Translation', quranTranslations[randomQuote])
    .addField("Chapter and verse number", quranNum[randomQuote])
    .setFooter('Rythm Remastered | Made by Kira.#8355')

    message.channel.send(embed)
}