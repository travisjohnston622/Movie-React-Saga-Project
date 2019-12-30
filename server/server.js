const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Router = require('./routes/movies.router');
const putRouter = require('.routes/put.movies.router');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/put.movies', putRouter);
app.use('/api/movies', Router);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});