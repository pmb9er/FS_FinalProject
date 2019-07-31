// need first two lines, I think the following two lines are correct

const express = require("express");
const router = express.Router();

const User = require("../models/user-model");
const UserService = require("../services/user-service");
const userService = new UserService();

// Handler functions

router.get("/", (req,res) => {
    userService.getAll()
    .then(result => {
        // var parsedData = JSON.parse(result);
        res.send(result);
    })
    .catch(err => {
        console.log("failure")
        console.log(err)
        res.status(400).send(err);
    });
});

router.get("/:id", (req,res) => {
    userService.getById(req.params.id)
    //const id = parseInt(req.params.id);
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        res.status(400).send(err);
    });
});

module.exports = router;