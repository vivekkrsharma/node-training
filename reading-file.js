const http = require("http");
var fs = require('fs');

const process = require("./config");
const PORT = process.PORT;

const server = http.createServer((req, res) => {
    fs.readFile('simple.txt', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

server.listen(PORT, console.log(`listening on PORT ${PORT}`));