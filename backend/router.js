// Dependencies
const express = require('express');
const axios = require('axios');

// Variable declaration
const router = express.Router();

router.get('/getResults/:query', async (req, res) => {
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${req.params.query}`
	);
	res.send(response.data).status(response.status);
});

router.get('/getTitle/:imdbID', async (req, res) => {
	response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&i=${req.params.imdbID}&plot=full`
	);

	res.send(response.data).status(response.status);
});

module.exports = router;
