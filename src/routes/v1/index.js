const express = require('express');
const CityController = require('../../controllers/city-controller'); // Importing the CityController 

const router = express.Router(); // Creating a new router instance

router.post('/city', CityController.create); // Route to create a new city
router.delete('/city/:id', CityController.dellete); // Route to delete a city by ID
router.get('/city/:id', CityController.get); // Route to get a city by ID
router.get('/city',CityController.getAll); // Route to get all cities
router.patch('/city/:id', CityController.update); // Route to update a city by ID

module.exports = router; // Exporting the router to be used in other parts of the application