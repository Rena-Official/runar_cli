const client = require('../index.js')

// roleDelete
/* Emitted whenever a guild role is deleted.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was deleted    */
client.on("roleDelete", (role) => {
    console.error(`a guild role is deleted`);
});