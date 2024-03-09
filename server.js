// var http = require('http');
// var dr = require('./firstModule');

// http.createServer(function (request, response) {
//     console.log("hi");
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello Vivek'+ dr.data());
// }).listen(8080);



// console.log("hello world!");


//SECOND WAY TO DOING SAME

const http =  require("http");
const process  =  require("./config");
const PORT = process.PORT;

const server = http.createServer( (req, res) => {
    res.end("Hello, World!");
});

server.listen(PORT, console.log(`listening on PORT ${PORT}`));