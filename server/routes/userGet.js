const express = require('express');
const User = require('../database/models/User');

const router = express.Router();

router.get('/userid/:userId', async (req, res) => {
  console.log(req.params.userId);
  try {
    const user = await User.findById(req.params.userId);
    console.log('User found: ', user);
    res.json(user);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.json({ status: 'error', error: 'Something is wrong :(' });
  }
});

module.exports = router;
