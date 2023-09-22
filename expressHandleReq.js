const express = require('express');

const app = express();

app.use(express.json());

// GET /users/:userId
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    res.status(200).send(`User details for userId: ${userId}`);
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
