#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const shell = require('shelljs')

const initAction = async () => {
  let answers = await inquirer.prompt([{
    type: 'input',
    message: '请输入项目名称:',
    name: 'name'
  }])
  console.log('项目名为：', answers.name)
  console.log('正在拷贝项目，请稍等')

  const remote = 'https://github.com/PanJiaChen/vue-admin-template.git'
  const curName = 'vue-admin-template'
  const tarName = answers.name

  shell.exec(`
                git clone ${remote} --depth=1
                mv ${curName} ${tarName}
                rm -rf ./${tarName}/.git
                cd ${tarName}
                cnpm i
              `, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`${stdout}`)
    console.log(`${stderr}`)
  });
}

program.version(require('./package.json').version)

// 定义一个命令
program
  .command('init')
  .description('创建项目')
  .action(initAction)

program.parse(process.argv)