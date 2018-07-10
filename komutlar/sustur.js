const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sustur` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Susturulmuş');
  if (!modlog) return message.reply('`mod-log` kanalını bulamıyorum.').catch(console.error);
  if (!muteRole) return message.reply('`Susturulmuş` adlı bir rol bulamıyorum.').catch(console.error);
  if (reason.length < 1) return message.reply('Susturma sebebini yazmalısın.').catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('Kimi susturacağını yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setAuthor("♥ 2018 ♥ MEGA BOT ♥ ", "https://cdn.discordapp.com/attachments/453166536824455178/463463488740917249/mega64x64.png")
  .setThumbnail("https://media.discordapp.net/attachments/443761633551056896/464790132713848833/mega.png?width=461&height=461")
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('》 Eylem:', 'Susturma')
  .addField('》 Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('》 Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('》 Sebep:', reason);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('Gerekli izinlere sahip değilim.').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
    message.guild.member(user).removeRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      guild.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'İstediğiniz kişiyi  susturur.',
  usage: 'sustur [kullanıcı] [sebep]'
};