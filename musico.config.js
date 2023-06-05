require('dotenv').config(); // Load the .env file

/**
 * @typedef {Object} Config
 * @property {string} [botId] => Your's bot's client id
 * @property {string} [botToken] => The bot's token
 * @property {string} [ownerId] => The bot's owner's / developer's id
 * @note you can add other properties to this object by yourself and access them in your code using `client.config.<your-property>`
 */
const config = {
	botId: process.env.BOT_ID || "",
	botToken: process.env.BOT_TOKEN || "",
	ownerId: process.env.OWNER_ID || "",
};
module.exports = config;
