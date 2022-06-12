const client = require('../index.js')

// emojiUpdate
/* Emitted whenever a custom guild emoji is updated.
PARAMETER    TYPE       DESCRIPTION
oldEmoji     Emoji      The old emoji
newEmoji     Emoji      The new emoji    */
client.on("emojiUpdate", (oldEmoji, newEmoji) => {
    console.log(`a custom guild emoji is updated`);
});