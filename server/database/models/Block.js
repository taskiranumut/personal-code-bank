const mongoose = require('mongoose');

const blocks = mongoose.Schema({
  blockTitle: {
    type: String,
    requred: true,
  },
  blockTag: {
    type: String,
    requred: true,
  },
  blockData: {
    type: String,
    requred: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blocks', blocks);
