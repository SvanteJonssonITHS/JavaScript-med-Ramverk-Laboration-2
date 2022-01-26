// Dependencies
const express = require('express');
const history = require('connect-history-api-fallback');
const dotenv = require('dotenv');
const path = require('path');

// Variable declaration
const app = express();
const port = 3000;

require('dotenv').config();

app.use('/api', require('./router'));

app.use(history());

app.use('/', express.static(path.join(path.resolve(), '../frontend/dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
