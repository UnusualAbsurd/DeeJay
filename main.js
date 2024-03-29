const { Client, Intents, Collection } = require('discord.js');
const Discord = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [ Intents.FLAGS.GUILDS ] });

client.commands = new Collection();
client.events = new Collection();

[ 'command_handler', 'event_handler' ].forEach((handler) => {
	require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.DISCORD_TOKEN);
