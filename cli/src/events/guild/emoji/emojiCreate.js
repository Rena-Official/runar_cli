const client = require('../index.js')

/* Emitted whenever a custom emoji is created in a guild.
PARAMETER    TYPE          DESCRIPTION
emoji        Emoji         The emoji that was created    */
client.on("emojiCreate", (emoji) => {
    console.log(`a custom emoji is created in a guild`);
});