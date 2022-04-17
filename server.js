const { animals } = require('./data/animals.json');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));

//parse incoming string to array data
//the extended:true on the method tells server there may be sub-array data nested in it as well. 
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API Server now on port ${PORT}!`)
});

