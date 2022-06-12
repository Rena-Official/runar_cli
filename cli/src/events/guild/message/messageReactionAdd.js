const client = require('../index.js')

// messageReactionAdd
/* Emitted whenever a reaction is added to a message.
PARAMETER              TYPE                   DESCRIPTION
messageReaction        MessageReaction        The reaction object
user                   User                   The user that applied the emoji or reaction emoji     */
client.on("messageReactionAdd", (messageReaction, user) => {
    console.log(`a reaction is added to a message`);
});