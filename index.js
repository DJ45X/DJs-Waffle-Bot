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
        commandsDir: join(__dirname, "Commands"),
        eventsDir: join(__dirname, "Events"),
        testServers: ["704122532755669022", "554186197031976990"],
    });
    client.user.setActivity('Pancake lovers suffer 🧇', { type: ActivityType.Watching });
});

client.login(process.env.TOKEN);