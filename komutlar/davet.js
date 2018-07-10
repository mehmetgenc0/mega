const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Davet Edip Bana Yardımcı Olmak İçin Bana Tıklayabilirsin :)")
  .setAuthor("", "")

  .setDescription(":arrow_right: MEGA botu sunucunuza ekleyip MEGA Bot'una Yardım Etmiş Olursunuz Ve Eğlenceli Komutlara Sahip Olursunuz.♥ :arrow_left:")
  .setFooter("♥ MEGA Bot ♥", "https://cdn.discordapp.com/attachments/453166536824455178/463463488740917249/mega64x64.png")
  .setThumbnail("")

  .setTimestamp()
  .setURL('https://discordapp.com/oauth2/authorize?client_id=463385431732518922&permissions=8&scope=bot')
  
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
