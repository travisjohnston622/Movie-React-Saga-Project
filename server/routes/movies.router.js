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
})




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
})




module.exports = router;