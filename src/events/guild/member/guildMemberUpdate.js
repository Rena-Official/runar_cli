const client = require('../index.js')

/* Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
PARAMETER    TYPE               DESCRIPTION
oldMember    GuildMember        The member before the update
newMember    GuildMember        The member after the update    */
client.on("guildMemberUpdate", (oldMember, newMember) => {
    console.error(`a guild member changes - i.e. new role, removed role, nickname.`);
});