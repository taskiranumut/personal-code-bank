const express = require('express');
const Block = require('../database/models/Block');

const router = express.Router();

router.post('/block', async (req, res) => {
  const { blockTitle, blockTag, blockData, user } = req.body;

  try {
    const response = await Block.create({
      blockTitle,
      blockTag,
      blockData,
      user,
    });
    console.log('Block created:', response);
  } catch (error) {
    console.log(JSON.stringify(error));
    return res.json({ status: 'error', error: 'Something is wrong :(' });
  }
  res.json({ status: 'ok' });
});

module.exports = router;
