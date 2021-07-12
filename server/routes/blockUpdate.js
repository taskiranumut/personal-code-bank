const express = require('express');
const Block = require('../database/models/Block');

const router = express.Router();

router.put('/id/:blockId', async (req, res) => {
  const { blockTitle, blockTag, blockData } = req.body;
  console.log({ blockTitle, blockTag, blockData });

  try {
    await Block.updateOne(
      { _id: req.params.blockId },
      {
        $set: { blockTitle },
      }
    );
    await Block.updateOne(
      { _id: req.params.blockId },
      {
        $set: { blockTag },
      }
    );
    await Block.updateOne(
      { _id: req.params.blockId },
      {
        $set: { blockData },
      }
    );
    res.json({ status: 'ok' });
  } catch (err) {
    res.json({ status: 'error', error: ':(((' });
  }
});

module.exports = router;
