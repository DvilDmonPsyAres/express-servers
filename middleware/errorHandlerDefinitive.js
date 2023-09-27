const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

//create the "resource not found" middleware
app.use((req, res, next) => {
  const error = new Error("Sorry, the requested resource couldn't be found")
  error.statusCode = 404;
  next(error);
})

//catch all middleware
app.use((err, req, res, next) => {
  console.error(err)
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: "Sorry, the requested resource couldn't be found.",
    statusCode
  });
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
