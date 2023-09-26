const express = require('express');
const app = express();
const path = require('path');

// Your code here
// const assetsDirectory = __dirname + '/assets';
// app.use(express.static(assetsDirectory))

app.use('/', express.static(path.join(__dirname, 'assets/scripts')));

// Define a route to serve the stylesheets
app.use('/stylesheets', express.static(path.join(__dirname, 'assets', 'css')));

//http://localhost:5000/stickers/hello.png
app.use('/stickers', express.static(path.join(__dirname, 'assets', 'images')))

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
