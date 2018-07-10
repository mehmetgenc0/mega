const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("MEGA BOT !")
  .setColor("RANDOM")
  .addField('**1.** `150+ kişilik sunucunuz olmalı.`')
  .addField('**2.** `Günlük aktif 70 üyeniz olmalıdır.`')
  .addField('**3.** `Eğer Partnerliğimizi Silerseniz Partnerlik Iptal Olur!`')
  .addField('**4.** `BOT^umuzu Sunucunuza Eklemelisiniz!`')
  .addField('**YUKARDAKI KURALLARA UYULMADIGI TAKDIRDE PARTNERLIK IPTAL OLUR!!!**')
  .setFooter("♥ 2018 ♥ MEGA ♥ BOT ♥ 0.5.0 V ♥", "https://cdn.discordapp.com/attachments/453166536824455178/463463488740917249/mega64x64.png")


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'şartlar',
  description: 'Partnerlik şartlarımızı gösterir.',
  usage: 'şartlar'
};