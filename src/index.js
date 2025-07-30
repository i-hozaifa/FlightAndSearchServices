const express = require("express");
require("dotenv").config(); // Load environment variables from .env file
const {PORT} = require('./config/serverConfig'); // Import the PORT from serverConfig

const SetupAndStartServer = async() => {
   // Create an instance of the express application or create the express object
    const app = express();
    // Set the port for the server to listen on
    
    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);
       
});

}

SetupAndStartServer();