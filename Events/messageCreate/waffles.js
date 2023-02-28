module.exports = async (instance, interaction, message) => {
    if (interaction.content.includes("pancake")) {
        if (interaction.author.bot) return;
        interaction.reply("Waffles are superior! Shut thy face hole pancake lover! 🧇 for life!");
    }
};