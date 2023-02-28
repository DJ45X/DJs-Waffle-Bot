module.exports = async (instance, interaction, message) => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    if (interaction.content.includes("pancake")) {
        if (interaction.author.bot) return;
        interaction.reply("Waffles are superior! Shut thy face hole pancake lover! 🧇 for life!");
        console.log(`[INFO]: Responded to "pancake" | ${date} - ${time}`);
    }
};