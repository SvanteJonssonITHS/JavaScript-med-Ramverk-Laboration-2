// Dependencies
const express = require('express');
const axios = require('axios');

// Variable declaration
const router = express.Router();

router.get('/getResults/:query', async (req, res) => {
	console.log('GET RESULTS', req.params.query);
	// Add failsafes incase input is wrong
	//Ability to get multiple pages
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${req.params.query}`
	);
	res.send(response.data).status(response.status);
});

router.get('/getTitle/:imdbID', async (req, res) => {
	console.log('GET TITLE', req.params.imdbID);

	// Add failsafes incase input is wrong
	response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&i=${req.params.imdbID}&plot=full`
	);

	res.send(response.data).status(response.status);
});

module.exports = router;
