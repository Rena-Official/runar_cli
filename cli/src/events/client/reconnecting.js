const client = require('../index.js')

// reconnecting
/* Emitted whenever the client tries to reconnect to the WebSocket.    */
client.on("reconnecting", () => {
    console.log(`client tries to reconnect to the WebSocket`);
});