const { Client, GatewayIntentBits, Events } = require('discord.js');
// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);

setTimeout(() => {
	console.log('Logging off');
	client.destroy();
}, 10000);
