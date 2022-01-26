// Dependencies
const express = require('express');
const axios = require('axios');

// Variable declaration
const router = express.Router();

router.get('/fetchSuggestions/:query', async (req, res) => {
	const response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${req.params.query}`
	);
	res.send(response.data);

router.get('/fetchResult/:query', async (req, res) => {
	let response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${req.params.query}`
	);

	const imdbID = response.data.Search[0].imdbID;

	response = await axios.get(
		`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&i=${imdbID}&plot=full`
	);

	res.send(response.data).status(200);
});

module.exports = router;
