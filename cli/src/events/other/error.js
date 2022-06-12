const client = require('../index.js')

// error
/* Emitted whenever the client's WebSocket encounters a connection error.
PARAMETER    TYPE     DESCRIPTION
error        Error    The encountered error    */
client.on("error", (error) => {
    console.error(`client's WebSocket encountered a connection error: ${error}`);
});