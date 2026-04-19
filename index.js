index.jsindex.js
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
}  const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Bot is ready: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});
require("dotenv").config();

client.login(process.env.TOKEN);
