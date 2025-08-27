const express = require('express');  // Importing the Express framework
const router = express.Router();  // Creating a new router instance

const v1ApiRoutes = require ('./v1/index');  // Importing v1 API routes from the v1 directory

router.use('/v1', v1ApiRoutes); // All routes starting with /v1 will be handled by v1ApiRoutes


module.exports = router;  // Exporting the router to be used in other parts of the application