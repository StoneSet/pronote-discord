const Discord = require("discord.js");
const fetch = require('node-fetch');
const fs = require('fs');
const crypto = require('crypto');

require("dotenv").config();

var bot = new Discord.Client(); //connection
var prefix = "/"; // prefix

function parseMarks() {
  
}

function start() {

  const username = process.env.IDENTIFIER;
  const password = process.env.PASSWORD;
  const pronote_url = process.env.PRONOTE_URL;
  const cas = process.env.CAS;

  console.log(username);
  console.log(password);
  console.log(pronote_url);
  console.log(cas);

  fetch(process.env.API_URL, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
      type: 'fetch',
      username,
      password,
      url: pronote_url,
      cas
    })
  }).then(async (res) => {

  })
}

bot.login(process.env.DISCORD_TOKEN);

bot.on("ready", () => {
  bot.user.setPresence({ game: { name: "être en développement", type: 0 } });
  console.log("Le Bot est Connecté !");
  start();
});