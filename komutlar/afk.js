const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let afkneden = args.slice(0).join(' ');
        if (afkneden.length < 1) {
		return message.reply('**AFK**,Nedenini Yazman Lazim ');
			} else {
        message.member.setNickname(`[AFK]${message.author.username}`);
        const afkm = new Discord.RichEmbed()
        .setDescription(`${message.author.username} ${afkneden} Kendisi Şuanda **AFK**`)
        return message.channel.sendEmbed(afkm)
		message.member.setNickname(`${message.author.username}`);
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  description: 'AFK Moduna gecersiniz',
  usage: 'afk sebepiniz'
}; 