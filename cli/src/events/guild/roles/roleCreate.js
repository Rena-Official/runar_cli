const client = require('../index.js')

// roleCreate
/* Emitted whenever a role is created.
PARAMETER    TYPE        DESCRIPTION
role         Role        The role that was created    */
client.on("roleCreate", (role) => {
    console.error(`a role is created`);
});