const Message = require("../../common/message");
const shell = require("shelljs");

const pull = () => {
  shell.exec("git pull", {
    encoding: Message.binaryEncoding
  }, Message.showMessage)
}

module.exports = pull;
