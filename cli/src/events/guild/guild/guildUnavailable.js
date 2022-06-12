const client = require('../index.js')

// guildUnavailable
/* Emitted whenever a guild becomes unavailable, likely due to a server outage.
PARAMETER    TYPE          DESCRIPTION
guild        Guild         The guild that has become unavailable    */
client.on("guildUnavailable", (guild) => {
    console.error(`a guild becomes unavailable, likely due to a server outage: ${guild}`);
});