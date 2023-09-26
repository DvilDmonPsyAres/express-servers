const express = require('express')
const app = express()

// create a function `logTime` invoking the arguments `req`, `res`, `next`
const logTime = (req, res, next) => {
  // have your function log the "Current time: " string with the Date function
  // to an ISO string
  console.log("Current time: ", new Date().toISOString());
  // Since no response has been returned yet invoke the `next` function so it
  // knows to move on to the next middleware function
  next();
};
// bind the app object with the `get` method with the arguments "/" route,
// `logTime` function, and `req`, `res`.
app.get("/", logTime, (req, res) => {
  // send a response of string "Hello World!"
  res.send("Hello World!");
  // note: We do not need to invoke a `next` function because we have returned
  // a successful response, ending this series of functions.
});

const passOnMessage = (req, res, next) => {
  console.log("Passing on a message!");
  req.passedMessage = "Hello from passOnMessage!";
  next();
};

// Then, let's add this middleware function to the app.get('/') route and then console.log the req.passedMessage in one of the later middleware functions:

app.get("/", logTime, passOnMessage, (req, res) => {
  console.log("Passed Message: ", req.passedMessage);
  res.send("Hello World!");
});


// Variation for invoking middleware functions
// Instead of passing each middleware function in separate arguments, you could also pass them all in as one array argument:

app.get("/", [logTime, passOnMessage], (req, res) => {
  console.log("Passed Message: ", req.passedMessage);
  res.send("Hello World!");
});
