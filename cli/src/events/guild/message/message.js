const client = require('../index.js')

// message
/* Emitted whenever a message is created.
PARAMETER      TYPE           DESCRIPTION
message        Message        The created message    */
client.on("message", (message) => {
    console.log(`message is sent -> ${message}`);
});