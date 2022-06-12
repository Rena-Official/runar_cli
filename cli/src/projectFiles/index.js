/* =============Import modules============= */
const { Client, Intents, Collection } = require("discord.js")
/* ======================================== */

/* ==========Creating Definitions========== */
const client = new Client({
    // setting intents
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
});
/* ======================================== */

module.exports = client; // export client

/* ================Settings================ */
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./src/config/config.json");
require("./src/handler")(client); // load handler
/* ======================================== */
client.login(client.config.canary_token).then(() => {
    // clear console messages
    console.clear()
    // when the bot logs in, send a success message to the console.
    console.log('正常に起動しました')
})