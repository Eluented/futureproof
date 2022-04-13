const http = require('http');

const requestListener = (req, res) =>{
    let body = {message: 'Hello from the other side!'};
    res.statusCode = 200 // good practice to put a status code
    res.end(JSON.stringify(body)) // make it into a json by doing json.stringify(body)
}   //need server to listen to requests - define handling logic and that

const server = http.createServer(requestListener);
const startServer = (port, host) => server.listen(port, host, () => // listen in to that port for the request that are coming 
    console.log(`Yeah! Visit http://${host}:${port} for the good stuff!`)
) // exactly same way as before but differnet architecture of writing it
const closeServer = cb => server.close(cb)



module.exports = {startServer}// you are requiring the server stuff - you need to export it basically so use module

// bam you have your own api - node server - 