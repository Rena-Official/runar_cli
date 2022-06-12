const client = require('../../../index');

// channelUpdate
/* Emitted whenever a channel is updated - e.g. name change, topic change.
PARAMETER        TYPE        DESCRIPTION
oldChannel       Channel     The channel before the update
newChannel       Channel     The channel after the update    */
client.on("channelUpdate", (oldChannel, newChannel) => { 
    console.log(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
});