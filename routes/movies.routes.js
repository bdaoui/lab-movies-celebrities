const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");


router.get('/create', (req, res) =>{
    res.render("movies/new-movie")
})

router.post("/create", (req, res) =>{
    const filmData = req.body;

    
})

module.exports = router;