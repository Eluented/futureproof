const http = require('http'); // send request via http

const hostname = '127.0.0.1';  // mimic static ip dont have to do this but 
const port = 3000; // have to create a port - where our webserver serves to and from - services dock with our server - change the port number if its used in local machine

const server = http.createServer((req, res) => { // want server to accept request and respond to request
    res.statusCode = 200; // take request and respond to it - give status quo of 200 - if it cant find something it will give 404 status quote
    res.setHeader('Content-Type', 'text/plain');  // every request has header and body 
    res.end('Hello Word'); // if it does this hello world
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})