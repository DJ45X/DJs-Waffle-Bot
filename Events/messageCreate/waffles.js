module.exports = async (instance, interaction, message) => {
    const now = new Date();
    const options = { timeZone: 'America/Chicago' };
    const date = now.toLocaleDateString('en-us', options);
    const time = now.toLocaleTimeString('en-us', options);
    const pancake = ['pancake', 'Pancake', 'pancakes', 'Pancakes']
    if (interaction.content.includes(pancake)) {
        if (interaction.author.bot) return;
        interaction.reply("Waffles are superior! Shut thy face hole pancake lover! 🧇 for life!");
        console.log(`[INFO]: Responded to "pancake" | ${date} - ${time}`);
    }
};