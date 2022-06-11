const client = require('../../../index');

// channelCreate
/* Emitted whenever a channel is created.
PARAMETER    TYPE        DESCRIPTION
channel      Channel     The channel that was created    */

client.on("channelCreate", (channel) => {
    console.log(`channelCreate: ${channel}`);
});