const config = require("./config.json");
const com = require("./src/commands");
const {Client, Intents} = require("discord.js");
const client = new Client({ws: {intents: Intents.ALL}});


const commands = {
    ...com.parceiros,
    ...com.utils,
    'ajuda': (message, client) => {
        message.channel.send(`Os comandos do bot são:
        !ponto 00 - Bate ponto`);
    },
}

const prefix = "!";

client.on("message", function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    try {
        commands[command](message, client);
    } catch (e) {
        message.channel.send(`Comando invalido digite !ajuda`);
    }
});

client.login(config.BOT_TOKEN);

client.on("ready", () => {
    console.log("I am ready");
});

client.fetchApplication();
