const client = require('../index.js')

// messageDeleteBulk
/* Emitted whenever messages are deleted in bulk.
PARAMETER    TYPE                              DESCRIPTION
messages     Collection<Snowflake, Message>    The deleted messages, mapped by their ID    */
client.on("messageDeleteBulk", (messages) => {
    console.log(`messages are deleted -> ${messages}`);
});