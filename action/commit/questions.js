const PrompyType = require("../../common/type");
const Type = require("./type");

const Questions = {
  [Type.Questions.type]: {
    type: PrompyType.List, // 密码为密文输入
    message: "请选择提交类型：",
    choices: Object.keys(Type.Commit).map(i => Type.Commit[i])
  },
  [Type.Questions.subject]: {
    type: PrompyType.Input, // 密码为密文输入
    message: "请输入subject(commit 目的的简短描述)："
  },
  [Type.Questions.body]: {
    type: PrompyType.Input, // 密码为密文输入
    message: "请输入body(对本次 commit 的详细描述)："
  },
  [Type.Questions.foot]: {
    type: PrompyType.Input, // 密码为密文输入
    message: "请输入foot(描述一些特殊情况，不兼容变动和issue关闭)："
  }
};

module.exports = Questions;
