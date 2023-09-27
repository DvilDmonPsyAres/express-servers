// Setting environment variable values
// Now that you know what environment variables are and how they're used, it's time to see how to set and get an environment variable value.

// Via command line
// The simplest way to set an environment variable, is via the command line, by declaring and setting the environment variable before the node command:

// PORT=8080 node app.js
// This sets an environment variable called PORT and sets its value to 8080. You can even declare and set multiple environment variables:

// PORT=8080 NODE_ENV=development node app.js
// Special case: NODE_ENV
// The NODE_ENV environment variable is a special variable that's used by many node programs to determine what environment the application is running in. For example, setting the NODE_ENV environment variable to production enables features in Express that help to improve the overall performance of your application. Whereas, setting NODE_ENV to development enabled features for more extensive debugging.

// Optional: For more details on the optimization for the production environment, see the Express documentation on how to Set NODE_ENV to "production".

// Within npm script
// The command-line approach also works within any npm script specified inside a package.json file:

// {
//   "scripts": {
//     "start": "PORT=8080 NODE_ENV=development node app.js"
//   }
// }
