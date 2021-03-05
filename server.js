const express = require("express");
const fs = require("fs");

const livereload = require("livereload");

// livereload
const lrServer = livereload.createServer({
  /*
    uncomment this to use LiveReload over https
    (https is required to record audio)
  */

  // https: {
  //   key: fs.readFileSync(`${__dirname}/ssl/ractive-player.key`, "utf-8"),
  //   cert: fs.readFileSync(`${__dirname}/ssl/ractive-player.crt`, "utf-8")
  // },
  port: 35729
});

// this is bad...
lrServer.watch(__dirname);

// http
const app = express();
app.use("/", express.static(__dirname));

app.set("port", 8080);
app.listen(app.get("port"));

console.log("Listening on port " + app.get("port"));
