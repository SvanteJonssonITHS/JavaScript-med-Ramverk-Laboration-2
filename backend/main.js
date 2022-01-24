const express = require('express');
const app = express();
const port = 3000;
const history = require('connect-history-api-fallback');
const dotenv = require('dotenv');
require('dotenv').config();

app.get('/api/', (req, res) => res.send(`${process.env.TEST}`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
