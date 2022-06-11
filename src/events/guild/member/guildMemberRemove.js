const client = require('../index.js')

// guildMemberRemove
/* Emitted whenever a member leaves a guild, or is kicked.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has left/been kicked from the guild    */
client.on("guildMemberRemove", (member) => {
    console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
});