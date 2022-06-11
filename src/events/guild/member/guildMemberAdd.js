const client = require('../index.js')

// guildMemberAdd
/* Emitted whenever a user joins a guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that has joined a guild    */
client.on("guildMemberAdd", (member) => {
    console.log(`a user joins a guild: ${member.tag}`);
});