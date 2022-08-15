const express = require("express");
const { create } = require("hbs");
const router = express.Router();
const Actor = require("../models/Celebrity.model")

router.get("/create", (req, res) =>{
    res.render("celebrities/new-celebrity");
})

router.post("/create", (req, res)=>{
    console.log("Tranfering data for new Actor");
    const actorData = req.body;
    Actor.create(actorData)
        .then(response => {
            res.render("celebrities/celebrities");
        })
        .catch(error =>{ res.redirect("/create")});

})


module.exports = router;