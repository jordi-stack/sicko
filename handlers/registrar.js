/**
 * @param {Object} client
 * @returns {void}
 */
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const registrar = (client) => {
    const rest = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN); // Read botToken from .env

    const commandJsonData = [
        ...Array.from(client.slashCommands.values()).map((c) => c.data.toJSON()),
        ...Array.from(client.contextCommands.values()).map((c) => c.data),
    ];

    (async () => {
        try {
            await rest.put(Routes.applicationCommands(process.env.BOT_ID), { // Read botId from .env
                body: commandJsonData,
            });
        } catch (error) {
            console.error(error);
        }
    })();
    return void 0;
};
module.exports = registrar;
