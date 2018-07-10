const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let type = args.slice(0).join(' ');
        if (type.length < 1) return message.reply('<:pencil:464801193776906240> Bug İçin Birşey Girmelisin.');

        client.channels.get("295119640219353088").sendMessage( '**Hata/Bug Bildirim/MEGA Bot** \n__**Kullanici**__ : @' + message.author.tag + '\n__Hata__:**' + type + '**');

    message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bug'],
  permLevel: 0
};

exports.help = {
  name: 'hata',
  description: 'Hata Bildirir.',
  usage: 'hata'
};
