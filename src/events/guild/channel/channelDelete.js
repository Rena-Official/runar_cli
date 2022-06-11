const client = require('../../../index');

// channelDelete
/* Emitted whenever a channel is deleted.
PARAMETER   TYPE      DESCRIPTION
channel     Channel   The channel that was deleted    */

client.on("channelDelete", (channel) => {
    console.log(`channelDelete: ${channel}`);
});
