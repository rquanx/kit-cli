const path = require("path");

let app = require(path.resolve(__dirname,"../"));
let common = require(path.resolve(app,".common"));
let action = require(path.resolve(app,".action"));
module.exports = {
  app,
  common,
  action
}