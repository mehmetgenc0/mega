const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
		
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":Şu anda Partnerimiz yok bize destek olmak için.", //tada: Partner  = sahibi =>> sunucu adi",
    url: "https://discord.gg/XwUqAhh ",
    description: "•partner olmak için :ok_hand:"
	.setFooter("♥️ 2018 ♥ MEGA ♥ BOT ♥️ 0.0.1 V ♥", "https://cdn.discordapp.com/attachments/453166536824455178/463463488740917249/mega64x64.png"),
            }});
	
	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};
