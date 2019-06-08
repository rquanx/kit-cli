#!/usr/bin/env node

const program = require('commander');
const action = require("./services/action");
const shell = require("shelljs");
var iconv = require('iconv-lite');
var encoding = 'cp936';
var binaryEncoding = 'binary';

program.version(require('./package.json').version)

// 定义一个命令
program
  .command('init')
  .description('创建项目')
  .action(action.initAction);


// 乱码
program.command("commit <type> <subject> [body] [foot]")
  .description("commit to resp")
  .action((type, subject, body, foot) => {
    shell.exec(`git add -A`)
    .exec(`git commit -m "${type}: ${subject} ${body} ${foot}"`)
    .exec(`git push`,{ encoding: binaryEncoding },function(err, stdout, stderr) {
      console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding), iconv.decode(new Buffer(stderr, binaryEncoding), encoding));
    });
  });

(process.argv.length < 3) && process.argv.push("-h");
program.parse(process.argv);