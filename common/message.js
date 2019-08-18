const iconv = require("iconv-lite");
const encoding = "cp936";
const binaryEncoding = "binary";

const showMessage = (err, stdout, stderr) => {
  console.log(
    iconv.decode(Buffer.from(stdout, binaryEncoding), encoding),
    iconv.decode(Buffer.from(stderr, binaryEncoding), encoding)
  );
};

module.exports = { showMessage, binaryEncoding };
