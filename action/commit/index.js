const Questions = require("./questions");
const Type = require("./type");
const Prompt = require("../../common/inquirer");
const shell = require("shelljs");
const Message = require("../../common/message");

const commit = async () => {
  let infoObj = {};
  for (var key in Questions) {
    infoObj[key] = await Prompt.prompt(Questions[key]);
  }
  let mainInfo = `"${infoObj[Type.Questions.type]}: ${Type.Questions.subject}"`;
  [infoObj[Type.Questions.body], infoObj[Type.Questions.foot]].forEach(item => {
    if (item) {
      mainInfo += ` -m "${item}"`;
    }
  });

  shell
    .exec(`git add -A`)
    .exec(`git commit -m ${mainInfo}`)
    .exec(
      `git push`,
      {
        encoding: Message.binaryEncoding
      },
      Message.showMessage
    );
};

module.exports = commit;
