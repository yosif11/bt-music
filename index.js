const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});
 
var shell = require('shelljs'); 
shell.exec('java -jar JMusicBot-0.2.10.jar')
