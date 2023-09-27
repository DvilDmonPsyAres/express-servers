// app.js

const express = require('express');

// Create the Express app.
const app = express();


// Define routes.

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/throw-error', (req, res) => {
  throw new Error('An error occurred!');
});

// Custom error handler.
app.use((err, req, res, next) => {
  console.error(err);
  res.send('An error occurred!  Please check the url, or wait a few minutes and try again.');
});

// Define a port and start listening for connections.

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));




// Customizing the status code
// If you use your browser's developer tools to inspect the response of http://localhost:8080/throw-error, you'll notice that the response HTTP status code is 200 OK, which is the default status code used by Express when sending responses. You can use the res.status() method to set a different status code:

// Custom error handler.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.send('An error occurred! Please check the url, or wait a few minutes and try again.');
});
