index.js
if (message.content === "!اسرع") {

  const easy = ["بيت", "قلم", "شمس", "باب", "ماء", "نار", "قمر", "شجرة"];
  
  const medium = [
    "مدرسة", "سيارة", "كتاب", "هاتف", "حاسوب",
    "طائرة", "حديقة", "مكتبة", "مدينة", "طريق"
  ];
  
  const hard = [
    "برمجة", "مستشفى", "طائرة نفاثة", "متحف تاريخي",
    "كهرباء", "إلكترونيات", "معلوماتية", "تكنولوجيا",
    "ديمقراطية", "استراتيجية", "اقتصاد عالمي"
  ];

  // نحدد احتمال الصعوبة
  const rand = Math.random();

  let level;
  let word;

  if (rand < 0.5) {
    level = "🟢 سهل";
    word = easy[Math.floor(Math.random() * easy.length)];
  } 
  else if (rand < 0.8) {
    level = "🟡 متوسط";
    word = medium[Math.floor(Math.random() * medium.length)];
  } 
  else {
    level = "🔴 صعب";
    word = hard[Math.floor(Math.random() * hard.length)];
  }

  message.reply(`⚡ المستوى: ${level}\n🧠 الكلمة: ${word}`);
}
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("pong 🏓");
  }
});

client.login("MTQ5NTIyMjk3MDY1MjgyMzY0Mw.GE_hjX.ibq3mKXM2gxt5LSu3tz5qAVDe6mvtzKX6oKW4w");
