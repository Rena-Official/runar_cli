const client = require('../index.js')

// userUpdate
/* Emitted whenever a user's details (e.g. username) are changed.
PARAMETER      TYPE        DESCRIPTION
oldUser        User        The user before the update
newUser        User        The user after the update    */
client.on("userUpdate", (oldUser, newUser) => {
    console.log(`user's details (e.g. username) are changed`);
});