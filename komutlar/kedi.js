const Discord = require('discord.js');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.run = (client, message, args) => {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "MEGA BOT", "http://random.cat", true );
    xmlHttp.send( null );
    var obj = JSON.parse(xmlHttp.responseText);
  message.channel.send('');
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Kedi: Meow`)
.setImage(`${obj.file}`)
.setColor(0x00ff00));
    }
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kedi',
  description: 'avatariniz? gorebilirsiniz. :wink: ',
  usage: 'avatar'
};