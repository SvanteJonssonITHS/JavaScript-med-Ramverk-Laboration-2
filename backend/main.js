const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const history = require('connect-history-api-fallback');
const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config();

app.get('/api/', (req, res) => res.send(`${process.env.TEST}`));

app.use(history());

app.use('/', express.static(path.join(path.resolve(), '../frontend/dist')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
