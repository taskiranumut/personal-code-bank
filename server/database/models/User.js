const mongoose = require('mongoose');

const userBank2 = mongoose.Schema({
  firstName: {
    type: String,
    requred: true,
  },
  lastName: {
    type: String,
    requred: true,
  },
  email: {
    type: String,
    requred: true,
    unique: true,
  },
  password: {
    type: String,
    requred: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserBank2', userBank2);
