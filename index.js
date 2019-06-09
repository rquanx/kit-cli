#!/usr/bin/env node

const program = require('commander');
const action = require("./services/action");

program.version(require('./package.json').version)

// 定义一个命令
program
  .command('init')
  .description('创建项目')
  .action(action.initAction);


program.command("commit <type> <subject> [body] [foot]")
  .description(`
  type：提交类型，可选值如下
  * work: 开发中(work in progress)
  * feature：新功能(new feature)
  * fix：修补bug(fix bug)
  * doc：文档(documentation changes)
  * style： 格式(change code format)
  * refactor：重构(modify code but not feature)
  * test：增加测试(test code)
  * chore：构建过程或辅助工具的变动(changes don't modify src and test files, only config or tasks)
  * none: 不写明
  
  subject：commit 目的的简短描述。
  
  body: 对本次 commit 的详细描述
  
  footer: 描述一些特殊情况，不兼容变动和issue关闭。
  `)
  .action(action.commit);

program.command("pull").description("pull form resp").action(action.pull);
program.command("clone <url>").description("clone resp").action(action.clone);

(process.argv.length < 3) && process.argv.push("-h");
program.parse(process.argv);