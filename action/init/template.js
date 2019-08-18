const gitDownload = require('download-git-repo');
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const shell = require('shelljs');

function download(name, remote) {
  return new Promise((res, rej) => {
    if (fs.existsSync(path.resolve(name))) {
      rej('当前目录已存在!');
    } else {
      // 开始下载模板文件
      gitDownload(`direct:${remote}`, name, {
        clone: true
      }, function (err) {
        if (err) {
          rej(`${err}`);
        } else {
          res();
        }
      })
    }
  });
}

function update(projectSetting) {
  return new Promise((res, rej) => {
    try {
      // let packageJson = JSON.parse(fs.readFileSync(`${path.resolve(projectSetting.library)}/package.json`));
      // Object.assign(packageJson, params);
      // fs.writeFileSync(`${path.resolve(dir)}/public/package.json`, JSON.stringify(packageJson, null, 2));
      // fs.writeFileSync(`${path.resolve(dir)}/README.md`, `# ${name}\n> ${description}`);
      shell.rm('-f', `./${projectSetting.library}/.git`);
      // shell.exec("cnpm i");
      res();
    } catch (e) {
      rej(e)
    }
  })
}

module.exports = {
  download,
  update
}