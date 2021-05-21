const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');   
const port=2727;

app.use(morgan('dev'));

app.use(express.static("public"));
app.use('/css', express.static(path.join(__dirname + 'public/css')));
app.use('/js', express.static(path.join(__dirname + 'public/js')));
app.use('/img', express.static(path.join(__dirname + 'public/img')));



app.get('', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
app.listen(port);
  