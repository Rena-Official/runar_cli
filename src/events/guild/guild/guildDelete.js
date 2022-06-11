const client = require('../index.js')

// guildDelete
/* Emitted whenever a guild is deleted/left.
PARAMETER    TYPE         DESCRIPTION
guild        Guild        The guild that was deleted    */
client.on("guildDelete", (guild) => {
    console.log(`the client deleted/left a guild`);
});