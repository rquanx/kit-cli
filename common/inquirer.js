const inquirer = require("inquirer");

async function prompt(promptObj) {
  return (await inquirer.prompt([
    {
      ...promptObj,
      name: "answser"
    }
  ])).answser;
}

async function input(message) {
  let answers = await inquirer.prompt([
    {
      type: "input",
      message,
      name: "answser"
    }
  ]);
  return answers.answser;
}

async function list(message, choices) {
  let answers = await inquirer.prompt([
    {
      type: "list",
      name: "answser",
      message,
      choices
    }
  ]);
  return answers.answser;
}

async function password() {
  let answers = await inquirer.prompt([
    {
      type: "password", // 密码为密文输入
      message: "请输入密码：",
      name: "answers"
    }
  ]);
  return answers.answers;
}

/**
 * 返回tue/false    y/Y/yes都可以
 * @param {*} message
 */
async function confirm(message) {
  let answers = await inquirer.prompt([
    {
      type: "confirm", // 密码为密文输入
      message: message,
      name: "answers"
    }
  ]);
  return answers.answers;
}

module.exports = {
  input,
  list,
  password,
  confirm,
  prompt
};
