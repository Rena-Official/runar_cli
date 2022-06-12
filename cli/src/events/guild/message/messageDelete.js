const client = require('../index.js')

// messageDelete
/* Emitted whenever a message is deleted.
PARAMETER      TYPE           DESCRIPTION
message        Message        The deleted message    */
client.on("messageDelete", (message) => {
    console.log(`message is deleted -> ${message}`);
});