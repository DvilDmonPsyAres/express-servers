const express = require('express');

//create router instance
const router = express.Router();

//home.js continued (after require and router declaration found above)

router.get('/', (req, res) => {
  res.send('Our team homepage');
});


module.exports = router;
