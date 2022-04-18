const {startServer} = require('./server2'); 

startServer(3000, 'localhost'); // instead of ip use local host which uses your ip of your pc

// seperation of concern - when any project starts index.js starts - standard