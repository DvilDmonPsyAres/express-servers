const express = require('express');
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

// This is a good example
app.get('/users/:id', (req, res) => {
  res.send("Details for a single user");
});

app.get('/users', (req, res) => {
  res.send("List of all users");
});

app.get('/products/:id', (req, res) => {
  res.send("Details for a single product");
});

app.get('/products', (req, res) => {
  res.send("List of all products");
});

app.get('/purchases/from/:startDate/to/:endDate/user/:userId', (req, res) => {
  res.send("List of all purchases in a date range for a single user");
});

app.get('/purchases/from/:startDate/to/:endDate', (req, res) => {
  res.send("List of all purchases in a date range");
});

app.get('/purchases/user/:userId', (req, res) => {
  res.send("List of all purchases by a single user");
});

app.get('/purchases/:id', (req, res) => {
  res.send("Details for a single purchase");
});






const port = 8000;
app.listen(port, () => console.log('Server is listening on port', port));
