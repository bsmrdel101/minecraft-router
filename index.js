const express = require('express');
const app = express();
const port = 3000;
const { Client, GatewayIntentBits, channelLink, GuildChannel, createChannel } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

app.use(express.json({ extended: false }));

// Routes
const test = require('./api/test');

app.use('/api/test', test);


// Discord bot
client.once('ready', () => {
	console.log('Bot is ready Ready!');
    console.log('===================');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.login(token);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
