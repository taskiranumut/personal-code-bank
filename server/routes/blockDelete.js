const express = require('express');
const Block = require('../database/models/Block');

const router = express.Router();

router.delete('/id/:blockId', async (req, res) => {
  console.log({ _id: req.params.blockId });
  try {
    const block = await Block.deleteOne({ _id: req.params.blockId });
    //json(block);
    console.log(`Block deleted: ${{ _id: req.params.blockId }}`);
  } catch (error) {
    res.json({ status: 'error', message: error });
  }
  res.json({ status: 'ok' });
});

module.exports = router;
