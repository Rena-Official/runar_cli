const client = require('../index.js')

// resume
/* Emitted whenever a WebSocket resumes.
PARAMETER    TYPE          DESCRIPTION
replayed     number        The number of events that were replayed    */
client.on("resume", (replayed) => {
    console.log(`whenever a WebSocket resumes, ${replayed} replays`);
});