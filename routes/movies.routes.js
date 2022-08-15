const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");
const { populate } = require("../models/Celebrity.model");


router.get('/create', (req, res) =>{
    Celebrity.find()
        .then(response => {
            res.render("movies/new-movie", {response} );
        })
        .catch(error => {console.log("there is an error ", error)})
})

router.post("/create", (req, res) =>{
    const filmData = req.body;

    Movie.create(filmData)
        .then(response =>{
            res.redirect("movies");
        })
        .catch(error => {console.log("there is an error ", error)})


})

router.get("/movies", (req, res)=>{
    Movie.find()
        .then(response =>{
            res.render("movies/movies", {response});
        })
        .catch(error => {console.log("there is an error ", error)})

})

router.get("/:id", (req, res) =>{
    const {id} = req.params;
    Movie.findById(id)
        .then(response =>{
           response.populate("cast") 
           .then(response =>{
                res.render("./movies/movie-details", {response});
            })
            .catch(error => { console.log("populating gave an error ", error)})
        })
        .catch(error =>{console.log("did not manage to find the required set of data, here is the error ", error)})
})


router.post("/:id/delete", (req, res) =>{
    const {id} = req.params;
    console.log(id);

    Movie.findByIdAndDelete(id)
        .then(response =>{
            res.redirect("../movies");
        })
        .catch(error =>{ console.log("this is the error: ", error)})
})

module.exports = router;