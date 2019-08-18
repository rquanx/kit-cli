const inquirer = require("../../common/inquirer");

async function initQuestoins() {
  let projectSetting = {
    spSetting: {
      siteUrl: "",
      strategy: "UserCredentials",
      username: "",
      password: ""
    },
    SPA: true,
    library: "Test"
  }
  projectSetting.library = await inquirer.input("请输入项目名称：");
  projectSetting.SPA = (await inquirer.confirm("开发单页应用？"));
  if (await inquirer.confirm("是否启用SharePoint调试")) {
    projectSetting.spSetting.strategy = await inquirer.list("请选择认证方式：", ["UserCredentials", "OnpremiseUserCredentials"]);
    projectSetting.spSetting.siteUrl = await inquirer.input("请输入SharePoint网站：");
    projectSetting.spSetting.username = await inquirer.input("请输入用户名：");
    projectSetting.spSetting.username = await inquirer.password("请输入密码：");
  }
  return projectSetting;
}

module.exports = {
  initQuestoins
}