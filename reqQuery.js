// req.query
// Express can parse query strings for you within a request and place them in the form of an object in req.query. Query strings are attached to a url using ?. Each variable is assigned a value using =. Variables are separated using &.

// For example, if you made the fetch request:

fetch('http://localhost:4000/users?firstName=John&lastName=Adams', {
    method: 'GET'
})
// And had a server handling this request like so:

// Server side handling
app.get('/users', (req, res) => {
    console.log(req.query.firstName);
    console.log(req.query.lastName);
})
// You would see the following in your terminal:

// John
// Adams
