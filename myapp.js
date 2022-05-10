const express = require("express");
const server = express();
const port = 3000;

const serverFile = __dirname + "/views/index.html";
const myhandler = (request, response) => {
  response.sendFile(serverFile);
};

const mypath = "/v1";

server.get(mypath, myhandler);

server.listen(port);
console.log(`Server starting on port ${port}`);
