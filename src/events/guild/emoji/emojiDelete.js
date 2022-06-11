const client = require('../index.js')

/* Emitted whenever a custom guild emoji is deleted.
PARAMETER    TYPE         DESCRIPTION
emoji        Emoji        The emoji that was deleted    */
client.on("emojiDelete", (emoji) => {
    console.log(`a custom guild emoji is deleted`);
});