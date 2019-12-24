
const Telegraf = require("telegraf");
const SocksAgent = require("socks5-https-client/lib/Agent");

// https://github.com/telegraf/telegraf/issues/63
const socksAgent = new SocksAgent({
  socksHost: "3.137.51.198", // todo move to config (with proper validation)
  socksPort: "9150",
  socksUsername: "",
  socksPassword: ""
});

console.log(process.env.NODE_ENV)

const isProd = process.env.NODE_ENV === 'production';

require("dotenv-safe").config();

const config = {
  token: process.env.BOT_TOKEN,
  isProd
};

console.log(JSON.stringify(config, null, 4));

const bot = new Telegraf(config.token, {
  telegram: { agent: config.isProd ? null : socksAgent }
});

bot.start(ctx => ctx.reply("Welcome"));
bot.help(ctx => ctx.reply("Send me a sticker"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.mention(["fdsjkfjdslkfjdsl_bot", "ML_Bot"], ctx =>
  ctx.reply("Hello! You've mentioned me, but I don't know what to do...")
);
bot.on("text", ctx => ctx.reply(`Well, you've said: "${ctx.message.text}".`));

console.log("Loading...");
bot.launch().then(() => {
  console.log("Done!");
});
