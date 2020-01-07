const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET route for movies on Home page

router.get('/', (req, res) => {
const queryString = `SELECT * FROM "movies"
ORDER BY "movies".title;`;
    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

//GET route for movie details on Details page

router.get('/details/:id', (req, res) => {
    const movieId = req.params.id;

    const queryString = `SELECT "genres".name, "movies".poster, "movies".description,
    "movies".title, "movies".id FROM "movies"
    JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
    JOIN "genres" ON "movies_genres".genres_id = "genres".id
    WHERE "movies".id =${movieId};`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

//PUT router to edit the movie description

router.put('/description/:id', (req, res) => {

    const movieId = req.params.id;
    const newDescription = req.body.description;
    console.log(movieId, newDescription);
    const queryString = `UPDATE "movies" SET "description" = ‘${newDescription}’ 
        WHERE "id" = $1;`;

    pool.query(queryString, [movieId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

//PUT router to edit the movie title

router.put('/title/:id', (req, res) => {
    const movieId = req.params.id;
    const newTitle = req.body.title;
    const queryString = `UPDATE "movies" SET "title" = '${newTitle}'
        WHERE "movies".id = $1;`;
    pool.query(queryString, [movieId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});




module.exports = router;