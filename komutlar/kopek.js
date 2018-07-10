const Discord = require('discord.js');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = (client, message, args) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://cdn.discordapp.com/attachments/453166536824455178/463780583701741588/yavru_kopek_bakimi.png", true );
    xmlHttp.send( null );
    var obj = JSON.parse(xmlHttp.responseText);
  message.channel.send('');
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Kopek: Hav! Hav!`)
.setFile(`${obj.file}`)
.setColor(0x00ff00));
    }


exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['it'],
  permLevel: 0
};

exports.help = {
  name: 'kopek',
  description: 'Rastgele kopek resmi atar.',
  usage: 'm!kopek'
};
