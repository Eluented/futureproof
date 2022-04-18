const http = require('http');
let allCats = ["Bob", "Zelda", "Freddie", "Bruce"];

const requestListener = (req, res) =>{
    let body;
    let statusCode;
    switch(req.url){ //recieve is get - post is put - put conditiional that says method is get - 
        case '/': //home you get this message
            body = {message: 'message from the other side'};
            break;
        case '/cats': // if you go to this website you get collection of cats
            if(req.method === 'GET'){
               body = {cats: allCats}
            } else if (req.method === 'DELETE'){
                allCats = [];
                statusCode = 204;
            }; break; 
        default:
            statusCode = 404
            body = {error : `Route ${req.url} does not exist`} 
            break;  // error handling error 404 bruh   
            
    }
    res.statusCode = statusCode || 200; //either give me 404 or give me 200 LOOK UP WHAT ARE STATUS CODES COMES UP IN DEBUG ASSIGNMENTS
    body = body && JSON.stringify(body)
    res.end(body);

}   //need server to listen to requests - define handling logic and that

const server = http.createServer(requestListener);
const startServer = (port, host) => server.listen(port, host, () => // listen in to that port for the request that are coming 
    console.log(`Yeah! Visit http://${host}:${port} for the good stuff!`)
) // exactly same way as before but differnet architecture of writing it
const closeServer = cb => server.close(cb)



module.exports = {startServer, closeServer}