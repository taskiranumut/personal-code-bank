const express = require('express');
const User = require('../database/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SCRET = "kasjhdı3124123+.'^+'^+V23V2rvaV'^%W+&B+%bwEvrvrwv";

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).lean();

  if (!user) {
    return res.json({ status: 'error', error: 'Invalid email/password' });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SCRET);

    return res.json({ status: 'ok', data: token });
  }

  res.json({ status: 'error', error: 'Invalid email/password' });
});

module.exports = router;
