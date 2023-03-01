module.exports = async (instance, interaction, message) => {
    const now = new Date();
    const options = { timeZone: 'America/Chicago' };
    const date = now.toLocaleDateString('en-us', options);
    const time = now.toLocaleTimeString('en-us', options);
    if (interaction.content.includes('pancake')) {
        if (interaction.author.bot) return;
        interaction.reply("Waffles are superior! Shut thy face hole pancake lover! 🧇 for life!");
        console.log(`[INFO]: Responded to "pancake" | ${date} - ${time}`);
    } else if (interaction.content.includes('Pancake')) {
        if (interaction.author.bot) return;
        interaction.reply("Waffles are superior! Shut thy face hole pancake lover! 🧇 for life!");
        console.log(`[INFO]: Responded to "pancake" | ${date} - ${time}`);
    } else if (interaction.content.includes('pancakes')) {
        if (interaction.author.bot) return;
        interaction.reply("Waffles are superior! Shut thy face hole pancake lover! 🧇 for life!");
        console.log(`[INFO]: Responded to "pancake" | ${date} - ${time}`);
    } else if (interaction.content.includes('Pancakes')) {
        if (interaction.author.bot) return;
        interaction.reply("Waffles are superior! Shut thy face hole pancake lover! 🧇 for life!");
        console.log(`[INFO]: Responded to "pancake" | ${date} - ${time}`);
    }
};