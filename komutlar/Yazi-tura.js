const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Yazı-Tura Oyunu;').setDescription(message.author.username + ', bu komutu direkt mesajda kullanamazsın.').setFooter('MEGA BOT', client.user.avatarURL).setTimestamp()); }
    message.guild.channels.get(message.channel.id).createInvite().then(invite =>
    message.channel.send('Bu sunucunun davet bağlantısı;\n' + invite.url)
   );
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-tura'],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura oyunu oynarsınız',
  usage: 'yazı-tura'
};
