const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// require all routes
const routes = require('./src/routes/routes');
const databaseOperations = require('./src/database/mongo_connection.js');

databaseOperations.connectDB();

app.use('/api', routes);

app.listen('8080');