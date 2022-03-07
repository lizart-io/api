const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { startDatabase } = require('./database/mongo-common');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

module.exports = {
  app,
  startDatabase
}

