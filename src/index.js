const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig'); // Import the PORT from serverConfig
// const CityRepository = require('./repository/city-repository');

const SetupAndStartServer = async() => {
   // Create an instance of the express application or create the express object
    const app = express();
    // Set the port for the server to listen on

    app.use(bodyParser.json());
    // Middleware to parse JSON bodies
    app.use(bodyParser.urlencoded({ extended: true }));
    // Middleware to parse URL encoded bodies

    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);


       
});

}

SetupAndStartServer();