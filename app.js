require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./router/router');

const app = express();

const ports = process.env.PORT || 3000;

mongoose
  .connect(
    'mongodb://localhost:27017/art',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(ports, console.log(`Server is running on port ${ports}`));
  })
  .catch((err) => console.log(`Could not connect to database server`, err));

app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join('images')));

app.use('/api', routes);

/** http://localhost:3000/api/profiles */