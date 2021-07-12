const express = require('express');
const Block = require('../database/models/Block');

const router = express.Router();

router.get('/user-blocks', async (req, res) => {
  console.log(req.body);
  try {
    const blocks = await Block.find(req.body);
    console.log('Blocks found: ', blocks);
    res.json(blocks);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.json({ status: 'error', error: 'Something is wrong :(' });
  }
});

module.exports = router;
