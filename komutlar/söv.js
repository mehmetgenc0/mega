exports.run = async (client, msg, args) => {
  let kufur=[
    "Amına kodumun jedayı seni",
    "Babanın amına koyayım orul orul orospu seni",
    "Ebenin amı gibi kaşları da kara",
    "seni amında olimpiyat meşalesi yakıp 10 km kostuğumun cocuğu ",
    "Senin amına mancınıkla patates atayım",
    "Senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "Senin amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini gibtiğimin am düdüğü",
    "senin ben düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "Senin amını keserim cebime koyarım sıkıldıkça sikerim",
    "Senin amına sınav yapar 2 milyon kişiyi sokarım",
    "amına barut döker sürtünmeyle yakarım orospu!",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "küfür ederdim ama anan çok yordu :)",
    "öyle yan durup şekilli mekilli tişört giyme seni götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
	"Bu Kelimelerimin Hepsi sana girsin"
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "295119640219353088")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign:Yapımcım mı sakın haa. Görmiyim bidaha.')
}})
  if(member.id === "364804007983841280")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign:  Hoop! Orda durucan liseli, Batuyu etiketlemişsin. Görmiyim bidaha`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Beni mi kandırcan ?`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
}})
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
exports.help = {
  name: 'söv',
  description: 'Etiketlediğin kişiye söver.',
  usage: 'söv'
 }