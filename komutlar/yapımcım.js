const Discord = require('discord.js');
exports.run = function(client, message, args) {
    message.channel.send({embed: {
        color: 0xD97634,
        description: "**Yapimcima ulasmak icin**; https://discord.gg/XwUqAhh"
		.setFooter("♥️ 2018 ♥ MEGA ♥ BOT ♥️ 0.0.1 V ♥", "https://cdn.discordapp.com/attachments/453166536824455178/463463488740917249/mega64x64.png")
      }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapimcim',
  description: 'Yapimcinin hakkında bilgi gösterir.',
  usage: 'yapimcim'
};