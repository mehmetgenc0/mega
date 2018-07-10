const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "MEGA BOT",
                    icon_url: "https://cdn.discordapp.com/attachments/453166536824455178/463463488740917249/mega64x64.png"
                  },
                description: "**:negative_squared_cross_mark:  Artık Afk Değilsin!**"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: 0
};

exports.help = {
  name: 'unafk',
  description: 'Afklıktan Çıkarsınız.',
  usage: 'unafk'
};