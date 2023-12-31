const express = require("express");

const app = express();

const logTime = (req, res, next) => {
  console.log("Current time: ", new Date().toISOString());
  next();
};

// `app.use(logTime)` an application-level middleware- invoked everytime the app recieves a request.
app.use(logTime);

const passOnMessage = (req, res, next) => {
  console.log("Passing on a message!");
  req.passedMessage = "Hello from passOnMessage!";
  next();
};

// `app.get('/') will only invoke when the specified route is requested.
// logTime is removed as a middleware for app.get('/')
app.get("/", passOnMessage, (req, res) => {
  console.log("Passed Message: ", req.passedMessage);
  res.send("Hello World!");
});

app.get("/bye", (req, res) => {
  res.send("Bye World.");
});

// Define a port and start listening for connections.
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
