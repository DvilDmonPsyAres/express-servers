const express = require('express');

//create router instance
const router = express.Router();

const weeklySchedule = [false, true, true, false, true, false, true];

router.get('/week', (req, res) => {
  //send the full weekly schedule
  res.json(weeklySchedule);
});

router.put('/week/:day', (req, res) => {
  //update the schedule for specified day to have a game
  const day = parseInt(req.params.day);
  weeklySchedule.splice(day, 1, true);
  res.json(weeklySchedule);
})


module.exports = router;
