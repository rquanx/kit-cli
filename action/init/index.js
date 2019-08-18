const questions = require("./questions");
const template = require("./template");
const fs = require("fs")
const ora = require('ora');
const spinner = ora();
const chalk = require('chalk');
const path = require("path");


const init = async () => {
  try {
    // 获取信息
    let projectSetting = await questions.initQuestoins();

    // 显示loading
    spinner.start('loading');

    // 
    let configJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, "config.json")));
    
    // 下载模板
    await template.download(projectSetting.library, configJson.remote);

    // 更新模板
    await template.update(projectSetting);
    spinner.succeed(chalk.green("创建完成"))
  } catch (e) {
    spinner.fail(chalk.red(typeof e === "string" ? e : e.stack));
  }
}

module.exports = init;