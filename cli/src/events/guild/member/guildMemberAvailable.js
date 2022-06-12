const client = require('../index.js')

// guildMemberAvailable
/* Emitted whenever a member becomes available in a large guild.
PARAMETER     TYPE               DESCRIPTION
member        GuildMember        The member that became available    */
client.on("guildMemberAvailable", (member) => {
    console.log(`member becomes available in a large guild: ${member.tag}`);
});