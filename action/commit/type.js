const Commit = {
  work: "work: 开发中(work in progress)",
  feature: "feature：新功能(new feature)",
  fix: "fix：修补bug(fix bug)",
  doc: "doc：文档(documentation changes)",
  style: "style： 格式(change code format)",
  refactor: "refactor：重构(modify code but not feature)",
  test: "test：增加测试(test code)",
  chore:
    "chore：构建过程或辅助工具的变动(changes don't modify src and test files, only config or tasks)",
  none: "none: 不写明"
};

const Questions = {
  type: "type",
  subject: "subject",
  body: "body",
  foot: "foot"
};

module.exports = { Commit, Questions };
