const client = require('../../index');

/* Emitted whenever the client user's settings update.
PARAMETER                  TYPE                       DESCRIPTION
clientUserGuildSettings    ClientUserGuildSettings    The new client user guild settings    */
client.on("clientUserGuildSettingsUpdate", (clientUserGuildSettings) => {
    console.log(`clientUserGuildSettingsUpdate -> client user's settings update`);
});