const express = require('express');
const User = require('../database/models/User');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password: plainTextPassword } = req.body;

  if (!email || typeof email !== 'string') {
    return res.json({ status: 'error', error: 'Invalid email!' });
  }

  if (!plainTextPassword || typeof plainTextPassword !== 'string') {
    return res.json({ status: 'error', error: 'Invalid password!' });
  }

  if (plainTextPassword.length <= 5) {
    return res.json({ status: 'error', error: 'Password is too small!' });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json({ status: 'ok', data: response });
    console.log('User created:', response);
  } catch (error) {
    if (error.code === 11000) {
      console.log(JSON.stringify(error));
      return res.json({ status: 'error', error: 'Email aldready in use!' });
    }
    throw error;
  }
});

module.exports = router;
