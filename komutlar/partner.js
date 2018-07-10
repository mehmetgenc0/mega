const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Partner Sunucular;")
  .setColor("RANDOM")
  .setDescription("**Partner Olmak için : m!yapımcı yazıp ona ulasın** \n \n **m!partner- Partner Olan 1.sunucuyu gosterir**\n", true)
  .setFooter("♥️ 2018 ♥ MEGA ♥ BOT ♥️ 0.0.1 V ♥", "https://cdn.discordapp.com/attachments/453166536824455178/463463488740917249/mega64x64.png")
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['partner'],
  permLevel: 0
};

exports.help = {
  name: 'partner',
  description: 'Bot ile ilgili komut listesini verir.',
  usage: 'partner'
};

