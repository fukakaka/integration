const express = require("express");

const ip = "127.0.0.1";
const port = "3005";
const app = express();

app.listen(port, ip, () => {
  console.log(`app listening on ${ip}:${port}`);
});
