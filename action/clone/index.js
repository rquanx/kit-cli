const Message = require("../../common/message");
const shell = require("shelljs");

const clone = (url) => {
  shell.exec(`git clone ${url}`, {
    encoding: binaryEncoding
  }, showMessage)
}

module.exports = clone;
