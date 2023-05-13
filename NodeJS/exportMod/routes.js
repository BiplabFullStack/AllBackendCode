// const http = require('http');
// const routes = require("./index.js")
// const server =http.createServer(routes.handeler)
// server.listen(3000);

//2nd away
const http = require('http');
const {requiestHandeler, bio} = require("./index.js")
const server =http.createServer(requiestHandeler)
server.listen(3000);