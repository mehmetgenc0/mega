const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply(':smoking: Çıkartın Sigaraları *** Yak Yak Yak *** :smoking:');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sigara', 'sigara-yak', 'yak-sigara', 'yakbi-sigara'],
  permLevel: 0
};

exports.help = {
  name: 'sigarayak',
  description: 'Bot Sigara Yakar.',
  usage: 'sigarayak'
};
