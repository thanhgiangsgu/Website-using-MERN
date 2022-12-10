// Import the Express library.
const express = require('express');
const path = require('path');
const Order = require('./src/App/models/Order')
var cors = require('cors')

const db = require('./src/config/db')

const route = require('./src/routers')

db.connect();
// Initializing the app.
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

route(app)
// Listen on port 3000
app.listen(3002, () => {
    console.log('listening at http://localhost:3001');
});