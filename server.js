const { animals } = require('./data/animals.json');
const express = require('express');
const app = express();

//get method req. 2 arguments  1st str describes route client will have to fetch from
//second callback function taht will execute everytime route is accessed with a GET request
app.get('/animals', (req,res) =>{
    //using send method from res Parameter to send strings like hello! to client / res Obj has a lot more methods then send
    //to send JSON change send() to json()
    res.json('animals')
});

app.listen(3001, () =>{
    console.log(`API Server now on port 3001!`)
});