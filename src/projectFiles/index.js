const { Client, Collection, Intents } = require("discord.js")
const client = new Client({
    // setting intents
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ],
    ws: {
        // set smartphone Activitiy
        properties: {
            $browser: "Discord iOS",
        },
    },
});
module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./src/config/config.json");

require("./src/handler")(client); // load handler

client.login(client.config.token).then(() => {
    console.clear()
    console.log('正常に起動しました')
})