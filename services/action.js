const questions = require("./questions");
const template = require("./template");
const fs = require("fs")
const ora = require('ora');
const spinner = ora();
const chalk = require('chalk');
const path = require("path");


const shell = require("shelljs");
var iconv = require('iconv-lite');
var encoding = 'cp936';
var binaryEncoding = 'binary';

const initAction = async () => {
  try {
    // 获取信息
    let projectSetting = await questions.initQuestoins();

    // 显示loading
    spinner.start('loading');

    // 
    let configJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../", "config.json")));
    // 下载模板
    await template.download(projectSetting.library, configJson.remote);

    // 更新模板
    await template.update(projectSetting);
    spinner.succeed(chalk.green("创建完成"))
  } catch (e) {
    spinner.fail(chalk.red(typeof e === "string" ? e : e.stack));
  }
}

const showMessage = (err, stdout, stderr) => {
  console.log(iconv.decode(Buffer.from(stdout, binaryEncoding), encoding), iconv.decode(Buffer.from(stderr, binaryEncoding), encoding));
}

const commit = (type, subject, body = "", foot = "") => {
  let mainInfo = "";
  [body, foot].forEach((item) => {
    if (item) {
      mainInfo += ` -m "${item}"`;
    }
  });
  
  shell
    .exec(`git add -A`)
    .exec(`git commit -m "${type}: ${subject}"${mainInfo}`)
    .exec(`git push`, {
      encoding: binaryEncoding
    }, showMessage);
}

const pull = () => {
  shell.exec("git pull", {
    encoding: binaryEncoding
  }, showMessage)
}

module.exports = {
  initAction,
  commit,
  pull
}