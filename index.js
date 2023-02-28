const { Client, GatewayIntentBits, Partials, Events, ActivityType } = require('discord.js');
const { DKRCommands } = require('dkrcommands');
const { join } = require('path');
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.Channel
    ],
});

client.on(Events.ClientReady, () => {
    new DKRCommands(client, {
        eventsDir: join(__dirname, "Events"),
    });
    client.user.setActivity('Pancake lovers suffer 🧇', { type: ActivityType.Watching });
});

client.login(process.env.TOKEN);