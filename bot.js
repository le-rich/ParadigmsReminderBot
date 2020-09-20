const Discord = require('discord.js')
const dotenv = require('dotenv').config()
const client = new Discord.Client()

bot_token = process.env.BOT_TOKEN;

client.login(bot_token);

client.on('ready', () => {
  console.log("Connected as " + client.user.tag);
  var generalChannel = client.channels.cache.get("756315265586823203");
  generalChannel.send("Hello, World!");
});

