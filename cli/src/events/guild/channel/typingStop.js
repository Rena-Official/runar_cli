const client = require('../index.js')

// typingStop
/* Emitted whenever a user stops typing in a channel.
PARAMETER       TYPE           DESCRIPTION
channel         Channel        The channel the user stopped typing in
user            User           The user that stopped typing    */
client.on("typingStop", (channel, user) => {
    console.log(`${user.tag} has stopped typing`);
});