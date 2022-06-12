const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const symbols = require("log-symbols");
const res = path.resolve;
const exist = fs.existsSync;
module.exports = async function (token, prefix, mongooseConnectionString) {
  if (exist(res("src")))
    return console.log(
      chalk.red(`${symbols.error} "src"フォルダを削除してください`)
    );
  await fs.mkdirSync(res("src"));
  //package json
  fs.readFile(
    res(path.join(__dirname, `..`, "projectFiles", "package.json")),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("package.json"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} package.jsonを作成しました`));
    }
  );

  // config.json
  await fs.mkdirSync(res("src/config"));
  const config = res("src/config/config.json");
  await fs.writeFileSync(config,
    `{
    "token": "${token}",
    "prefix": "${prefix}",
    "mongooseConnectionString": "${mongooseConnectionString}"
}`);
  console.log(chalk.green(`${symbols.success} config.jsonを作成しました`));

  // index.js
  const index = res("index.js");
  fs.readFile(
    path.join(__dirname, "..", "projectFiles", "index.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(index, data, (err) => console.log(err));
      console.log(chalk.green(`${symbols.success} index.jsを作成しました`));
    }
  );

  // handler folder and files
  fs.mkdirSync(res("src/handler"));
  fs.readFile(
    path.join(__dirname, "..", "projectFiles", "handler.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/handlers/index.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} index.jsを作成しました`));
    }
  );

  // events folder and files
  fs.mkdirSync(res("src/events"));
  fs.readFile(
    path.join(__dirname, "..", "projectFiles", "ready.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/events/ready.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} ready.jsを作成しました`));
    }
  );
  fs.readFile(
    path.join(__dirname, "..", "projectFiles", "messageCreate.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/events/messageCreate.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} messageCreate.jsを作成しました`));
    }
  );

  // commands folder and files
  fs.mkdirSync(res("src/commands"));
  fs.mkdirSync(res("src/commands/info"));
  fs.readFile(
    path.join(__dirname, "..", "projectFiles", "ping.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/commands/info/ping.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} ping.jsを作成しました`));
    }
  );
  fs.mkdirSync(res("src/SlashCommands"));
  fs.mkdirSync(res("src/SlashCommands/info"));
  fs.readFile(
    path.join(__dirname, "..", "projectFiles", "ping_slash.js"),
    "utf8",
    async (err, data) => {
      if (err) throw err;
      await fs.writeFileSync(res("src/SlashCommands/info/ping.js"), data, (err) =>
        console.log(err)
      );
      console.log(chalk.green(`${symbols.success} ping.jsを作成しました`));
    }
  );
};
