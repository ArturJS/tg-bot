const Telegraf = require("telegraf");
const SocksAgent = require("socks5-https-client/lib/Agent");

// https://github.com/telegraf/telegraf/issues/63
const socksAgent = new SocksAgent({
  socksHost: "3.137.51.198",
  socksPort: "9150",
  socksUsername: "",
  socksPassword: ""
});

const config = {
  token: process.env.BOT_TOKEN
};

const bot = new Telegraf(config.token, {
  telegram: { agent: socksAgent }
});

bot.start(ctx => ctx.reply("Welcome"));
bot.help(ctx => ctx.reply("Send me a sticker"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.on("text", ctx => ctx.reply(`Well, you've said: "${ctx.message.text}".`));

console.log("Loading...");
bot.launch().then(() => {
  console.log("Done!");
});
