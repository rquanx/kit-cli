const Message = require("../../common/message");
const shell = require("shelljs");

const clone = (url) => {
  shell.exec(`git clone ${url}`, {
    encoding: Message.binaryEncoding
  }, Message.showMessage)
}

module.exports = clone;
