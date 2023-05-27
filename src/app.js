const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { menuRouter, shopRouter } = require('./routes/api');

require('dotenv').config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/menu/', menuRouter);
app.use('/api/shop/', shopRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    res.status(err.status).json({ message: err.message });
});

module.exports = app;
