const mongoose = require('mongoose');

const users = mongoose.Schema({
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

module.exports = mongoose.model('Users', users);
