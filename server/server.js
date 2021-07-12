const express = require('express');
const connectDB = require('./database/connection');
const cors = require('cors');

const app = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
app.use('/', loginRoute, registerRoute);

const Port = process.env.Port || 3000;
app.listen(Port, () => console.log('Server started..!'));
