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
});

module.exports = router;
