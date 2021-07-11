const mongoose = require('mongoose');
require('dotenv/config');

const connectDB = async () => {
  await mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  console.log('Database connected..!');
};

module.exports = connectDB;
