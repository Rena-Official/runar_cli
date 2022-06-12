const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const mongoose = require("mongoose");
const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
  // Commands
  const commandFiles = await globPromise(`${process.cwd()}/src/commands/**/*.js`);
  commandFiles.map((value) => {
    const file = require(value);
    const splitted = value.split("/");
    const directory = splitted[splitted.length - 2];

    if (file.name) {
      const properties = { directory, ...file };
      client.commands.set(file.name, properties);
    }
  });

  const eventFiles = await globPromise(`${process.cwd()}/src/events/*.js`);
  eventFiles.map((value) => require(value));

  const slashCommands = await globPromise(`${process.cwd()}/src/SlashCommands/*/*.js`);
  const slashFiles = await globPromise(`${process.cwd()}/src/SlashCommands/**/*.js`);
  slashFiles.map((value) => {
    const file = require(value);
    const splitted = value.split("/");
    const directory = splitted[splitted.length - 2];

    if (file.name) {
      const properties = { directory, ...file };
      client.slashCommands.set(file.name, properties);
    }
  });

  const arrayOfSlashCommands = [];
  slashCommands.map((value) => {
    const file = require(value);
    if (!file?.name) return;
    client.slashCommands.set(file.name, file);

    if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
    arrayOfSlashCommands.push(file);
  });
  client.on("ready", async () => {
    await client.application.commands.set(arrayOfSlashCommands);
  });

  client.on("guildCreate", async (guild) => {
    await client.application.commands.set(arrayOfSlashCommands, guild.id);
  })
  const { mongooseConnectionString } = require('../config/config.json')
  if (!mongooseConnectionString) return;

  mongoose.connect(mongooseConnectionString).then(() => console.log('mongoDBに接続しました'));
};
