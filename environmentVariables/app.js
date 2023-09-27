// app.js
const express = require('express');

// Load the environment variables from the .env file
require('dotenv').config();

// Create the Express app.
const app = express();

// Define routes.

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Define a port and start listening for connections.
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));



// Another way to use dotenv
// Another way to include your environment variables is through your command line through the dotenv-cli package.

// To start, install the dotenv-cli package as a development dependency:

// npm install dotenv-cli --save-dev
// Then run the dotenv command passing in the command to start your server. The package will look for a .env file in your working directory and add it to your environment before running your command:

// dotenv node app.js
// The dotenv-cli package also supports other command line features that you may find useful. Feel free to check them out here.https://www.npmjs.com/package/dotenv-cli


// It's important to keep your .env file out of your source control as it will often contain sensitive information like database connection settings or API keys and secrets. If you're using Git for your source control, make sure that your .gitignore file includes an entry for .env files.
