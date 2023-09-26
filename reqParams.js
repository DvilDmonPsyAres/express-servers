// req.params
// Finally, Express also supports named route parameters. This means that a chunk of your URL can be parameterized and read conveniently through req.params. This is what sending John Adams would look like using req.params.

fetch('http://localhost:4000/users/John/Adams', {
    method: 'POST'
})
// Server side handling
app.post('/users/:firstName/:lastName', (req, res) => {
    console.log(req.params.firstName);   // John
    console.log(req.params.lastName);    // Adams
})
// The route pattern shown above means that Express is expecting two more levels in the path that are to be interpreted as firstName and lastName. These can then be read using req.params object.
