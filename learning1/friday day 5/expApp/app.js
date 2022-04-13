const express = require('express');
const app = express();                  // app instantiates express
//make app.js available for the resot of the project - need to do module.exports = app;
const cors = require('cors');
const cats = [ 
    {id:1, name:'zelda', age:3},
    {id:2, name:'tigerlily', age:10},
    {id:3, name:'rumble', age:12}
]

app.use(cors());

app.get('/', (req,res) =>{    // do this - slash means main/HOME route - can built multiple routes that recieve data and have multiple outcomes 
    res.send('Hello World');
});            

app.get('/cats/:id', (req,res) =>{
    console.log(req.query);
    const catId = req.params.id -1 // index 
    const selectedCat = cats[catId]
    res.send(selectedCat)
})

app.get('/cats', (req,res) =>{
    res.send(cats);
})
module.exports = app;
