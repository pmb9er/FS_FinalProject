const express = require("express");
const router = express.Router();
const ListingService = require('../services/listing-service');

router.post("/", (req,res) => {
    ListingService.prototype.create(req.body)
    .then(resId => {
        // var parsedData = JSON.parse(result);
        res.send(JSON.stringify(resId))
    })
    .catch(err => {
        console.log("failure")
        console.log(err)
        res.status(400).send(err)
    })
})

router.post("/imgUrl", (req,res) => {
    ListingService.prototype.addImgUrl(req.body)
    .then(resId => {
        // var parsedData = JSON.parse(result);
        res.send(JSON.stringify(resId))
    })
    .catch(err => {
        console.log("failure")
        console.log(err)
        res.status(400).send(err)
    })
})

router.get("/:id", (req,res) => {
    ListingService.prototype.getById(req.body)
    .then(response => {
        // var parsedData = JSON.parse(result);
        res.send(response)
    })
    .catch(err => {
        console.log("failure")
        console.log(err)
        res.status(400).send(err)
    })
})

router.get("/", (req,res) => {
    ListingService.prototype.getAll()
    .then(response => {
        // var parsedData = JSON.parse(result);
        res.send(response)
    })
    .catch(err => {
        console.log("failure")
        console.log(err)
        res.status(400).send(err)
    })
})

router.get("/provider/:id", (req,res) => {
    ListingService.prototype.getByProviderId(req.pararms.id)
    .then(response => {
        // var parsedData = JSON.parse(result);
        res.send(response)
    })
    .catch(err => {
        console.log("failure")
        console.log(err)
        res.status(400).send(err)
    })
})

router.patch("/", (req,res) => {
    ListingService.prototype.update(req.body)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

router.delete("/:id", (req,res) => {
    ListingService.prototype.delete(req.params.id)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

module.exports = router;

