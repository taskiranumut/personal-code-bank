const mongoose = require('mongoose');

const blockBank2 = mongoose.Schema({
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
    ref: 'UserBank2',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BlockBank2', blockBank2);
