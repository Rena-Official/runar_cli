const client = require('../../index.js')

// debug
/* Emitted for general debugging information.
PARAMETER    TYPE         DESCRIPTION
info         string       The debug information    */
client.on("debug", (info) => {
    console.log(`debug -> ${info}`);
});