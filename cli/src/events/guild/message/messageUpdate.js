const client = require('../index.js')

// messageUpdate
/* Emitted whenever a message is updated - e.g. embed or content change.
PARAMETER     TYPE           DESCRIPTION
oldMessage    Message        The message before the update
newMessage    Message        The message after the update    */
client.on("messageUpdate", (oldMessage, newMessage) => {
    console.log(`a message is updated`);
});