const client = require('../index.js')

// guildMemberSpeaking
/* Emitted once a guild member starts/stops speaking.
PARAMETER     TYPE                DESCRIPTION
member        GuildMember         The member that started/stopped speaking
speaking      boolean             Whether or not the member is speaking    */
client.on("guildMemberSpeaking", (member, speaking) => {
    console.log(`a guild member starts/stops speaking: ${member.tag}`);
});