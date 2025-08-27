const express = require('express');
const CityController = require('../../controllers/city-controller'); // Importing the CityController 

const router = express.Router(); // Creating a new router instance

router.post('/city', CityController.create); // Route to create a new city

module.exports = router; // Exporting the router to be used in other parts of the application