const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setFooter("Cคptคin Bot", "https://cdn.discordapp.com/attachments/465884337405952002/465971100421980160/64x64.jpg")
  .setTitle("Cคptคin Bot'un Komutları  **Version: 0.5.0**   ('Lütfen Botumuzu Yargılamayınız.') <prefix> değiştirme komutu eklenecek şimdilik = 'c!'")
  .addBlankField(true)
  .addField("Cคptคin Bot'un Eğlence Komutları", "<prefix> mani: Bot mani yazar.\n<prefix>wtf:Wtf?.\n<prefix>hata: Hata Bildirir.\n<prefix> dikkatdağıt: Dikkat dağıtır. \n<prefix> yakbisigara: Sigara yakarsınız. \n<prefix> çekiç: Belirttiğiniz kişiye çekiç atarsınız. \n<prefix> yaz: Yazdıklarınızı bota yazdırır. \n<prefix> yazı-tura: Yazı tura oynarsınız")
  .addField("Cคptคin Bot'un Moderasyon Komutları", "<prefix> ban: Bot belirttiğiniz kişyi bulunduğunuz sunucudan banlar. \n<prefix> kick : Bot belirttiğiniz kişiyi bulunduğunuz sunucudan atar. \n<prefix> unban: Bot belirttiğiniz kişinin yasağını bulunduğunuz sunucudan kaldırır. \n<prefix> sustur: Bot belirttiğiniz kişiyi bulunduğunuz sunucuda susturur. \n<prefix> kilit: Yazdığını kanalı kilitler. \n<prefix> uyar: etiketlediğiniz kullanıcıyı uyarır. \n")
  .addField("Cคptคin Bot'un Genel Komutları", "<prefix> ailemiz: Ailemizi göserir. \n<prefix> wtf: Wtf mesajı atar. \n<prefix> hata: Hata bildirimi gönderir. \n<prefix> ping: Bot gecikme süresini gösterir. \n<prefix> davet: Bot kendi davet linkini atar. \n<prefix> istatistik: Bot istatistiklerini gösterir. \n<prefix> partner: Partner bilgilerini gösterir. \n<prefix> tavsiye: Botun sahibine tavsiye mektubu atarsınız. \n<prefix> sunucu: Sunucu bilgisini görebiilirsiniz. \n<prefix> espiri: Bot rastgele espiri yapar. ")

    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description:'Tüm komutları listeler.',
  usage: 'yardım'
};
