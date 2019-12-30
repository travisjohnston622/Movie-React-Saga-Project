const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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
