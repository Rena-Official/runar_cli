const client = require('../../index');

// clientUserSettingsUpdate
/* Emitted when the client user's settings update.
PARAMETER             TYPE                  DESCRIPTION
clientUserSettings    ClientUserSettings    The new client user settings    */
client.on("clientUserSettingsUpdate", (clientUserSettings) => {
    console.log(`clientUserSettingsUpdate -> client user's settings update`);
});