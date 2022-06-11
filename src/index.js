#!/usr/bin/env node
const inquirer = require("inquirer");
const newProject = require("./templates/project");

inquirer
  .prompt([
    {
      type: "list",
      message: "操作を選択してください",
      name: "options",
      choices: ["新規作成", "キャンセル"],
    },
  ])
  .then(({ options }) => {
    if (options === "新規作成") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "botToken",
            message: "BotのTokenを入力してください: ",
          },
          {
            type: "input",
            name: "botPrefix",
            message: "Botの接頭辞(プレフィックス)を入力してください: ",
          },
          {
            type: "input",
            name: "mongo",
            message: "mongooseの接続URLを入力してください: ",
          },
        ])
        .then(({ botToken, botPrefix, mongo }) => {
          newProject(botToken, botPrefix, mongo);
        });
    } else {
      process.exit()
    }
  });
