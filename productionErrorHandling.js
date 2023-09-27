// Defining multiple custom error handlers
// Express allows you to define more than one custom error handler which is useful if you need to handle specific types of errors differently. It's also useful for creating an error handler to perform a specific error handling task. Let's look at an example of defining a second error handler that's responsible for logging errors.

// Error handlers, like route handlers, are executed by Express in the order that they're defined in, so defining a new error handler before the existing handler ensures that it'll be called first:

// Custom error handlers.

// Error handler to log errors.
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // TODO Log the error to the database.
  } else {
    console.error(err);
  }
  next(err);
});

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = process.env.NODE_ENV === 'production';
  res.render('error', {
    title: 'Server Error',
    message: isProduction ? null : err.message,
    stack: isProduction ? null : err.stack,
  });
});
