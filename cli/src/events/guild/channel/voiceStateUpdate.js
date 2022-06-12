const client = require('../index.js')

// voiceStateUpdate
/* Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
PARAMETER    TYPE             DESCRIPTION
oldMember    GuildMember      The member before the voice state update
newMember    GuildMember      The member after the voice state update    */
client.on("voiceStateUpdate", function(oldMember, newMember){
    console.log(`a user changes voice state`);
});