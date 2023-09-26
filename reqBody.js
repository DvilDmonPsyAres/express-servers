// req.body
// The body of an incoming request will be parsed and made available for use in the req.body property of the request object. It can be parsed from JSON as long as the header Content-Type of the request is of type application/json, and the body contains a JSON string with the data coming from the client.

// Express will do this for you automatically if you configure it to do so with express.json().

// For example, say you have a client and server built like the following:

// Client sending request
const data = {
    firstName: 'John',
    lastName: 'Adams'
};

fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
// app.js
const express = require('express');
const app = express();

// This line allows the body of a request to be parsed into the req.body object
app.use(express.json());

// Server side handling
app.post('/users', (req, res) => {
    console.log(req.body);
})
// { firstName: 'John', lastName: 'Adams' } will be printed in your terminal when the request is made.
