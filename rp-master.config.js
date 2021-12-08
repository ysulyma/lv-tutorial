// rp-master.config.js
const os = require("os");

module.exports = {
  render: {
    concurrency: os.cpus().length,
    imageFormat: "png"
  },
  thumbs: {
    browserHeight: 800,
    browserWidth: 1280,
    concurrency: os.cpus().length,
    frequency: 1,
    imageFormat: "png",
    // make sure the output pattern matches the imageFormat
    output: "./thumbs/%s.png"
  }
};