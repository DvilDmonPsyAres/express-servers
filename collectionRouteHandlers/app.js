const express = require('express');
const home = require('./routes/home');
const schedule = require('./routes/schedule');
const roster = require('./routes/roster');


// Create the Express app.
const app = express();

// Mount router instances.
app.use('/home', home);
app.use('/schedule', schedule);
app.use('/roster', roster);
